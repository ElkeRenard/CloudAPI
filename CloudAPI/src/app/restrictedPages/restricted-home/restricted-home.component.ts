import { Component, OnInit, Renderer2 } from '@angular/core';
import {ExoticService, ICountry } from '../../services/exotic.service';
import { MyWorldService } from '../../services/my-world.service';
import {ShareService } from '../../services/share.service';

@Component({
  selector: 'restricted-home',
  templateUrl: './restricted-home.component.html',
  styleUrls: ['./restricted-home.component.scss']
})
export class RestrictedHomeComponent implements OnInit {

  public list;
  private input: string;
  private API: boolean;
  private myWorld: boolean;
  private option: any;

  constructor(private exoticApi: ExoticService, private renderer: Renderer2, private myWorldAPI: MyWorldService, private share: ShareService) { }

  ngOnInit() {
  }

  findCountry(){
    //console.log("input: ",(<HTMLInputElement>document.getElementById("search")).value);
    this.input = (<HTMLInputElement>document.getElementById("search")).value;
    if(this.input == ""){
      this.list = [];
      this.share.setSearchResult(this.list);
    }

    if(this.API){
      this.share.Option = "API";     
      this.exoticApi.searchByName(this.input).subscribe(root => {
        this.list = root.Response;
        this.share.setRestrictedSearchResult(this.list, "API");
        //console.log(this.list);
       },
       err => {
        console.log(err.message);
       },
       () => {
        //console.log("Done loading search result");
       });
    }
    
    if(this.myWorld){
      this.share.Option="MyWorld"; 
      this.myWorldAPI.searchByName(this.input).subscribe(root => {
      this.list = root;
      this.share.setRestrictedSearchResult(this.list, "MyWorld");
      console.log("filter: ",root);
        },
        err => {
          console.log(err.message);
        },
        () => {
          console.log("Done loading search result");
      });
    }
  }

  public searchAPI(){
    this.API = true;
    this.myWorld = false;
    this.option = document.getElementsByTagName("h3");
    //console.log(this.option, this.API, this.myWorld);
    this.renderer.setStyle(this.option[0], 'color', '#4dd0e1');
    this.renderer.setStyle(this.option[1], 'color', 'white');
  }

  public searchMyWorld(){
    this.API = false;
    this.myWorld = true;
    this.option = document.getElementsByTagName("h3");
    //console.log(this.option, this.API, this.myWorld);
    this.renderer.setStyle(this.option[0], 'color', 'white');
    this.renderer.setStyle(this.option[1], 'color', '#4dd0e1');
  }
}
