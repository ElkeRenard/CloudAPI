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
    //console.log((<HTMLInputElement>document.getElementById("search")).value);
    this.input = (<HTMLInputElement>document.getElementById("search")).value;
    if(this.API){
      if(this.input == ""){
        this.list = [];
        this.share.setSearchResultByName(this.list);
      }
      else{      
        this.exoticApi.searchByName((<HTMLInputElement>document.getElementById("search")).value).subscribe(root => {
          this.list = root.Response;
          this.share.setRestrictedSearchResultByName(this.list, "API");
          console.log(this.list);
        },
        err => {
          console.log(err.message);
        },
        () => {
          console.log("Done loading search result");
        });
      }
    }
      if(this.myWorld){
        if(this.input == ""){
          console.log("go api go!!!");
          this.myWorldAPI.getAll().subscribe( result => {
            console.log("empty request", result)
            this.list = result;
            this.share.setRestrictedSearchResultByName(this.list, "MyWorld");
            console.log(this.list);
          },
          err => {
            console.log(err.message);
          },
          () => {
            console.log("done");
          });
        }
        else{ 
          this.exoticApi.searchByName("Canada").subscribe(root => {
          this.list = root.Response;
          this.share.setRestrictedSearchResultByName(this.list, "MyWorld");
          console.log(this.list);
            },
            err => {
              console.log(err.message);
            },
            () => {
              console.log("Done loading search result");
          });
        }
      }
  }

  public searchAPI(){
    this.API = true;
    this.myWorld = false;
    this.option = document.getElementsByTagName("h3");
    console.log(this.option, this.API, this.myWorld);
    this.renderer.setStyle(this.option[0], 'color', '#4dd0e1');
    this.renderer.setStyle(this.option[1], 'color', 'white');
  }

  public searchMyWorld(){
    this.API = false;
    this.myWorld = true;
    this.option = document.getElementsByTagName("h3");
    console.log(this.option, this.API, this.myWorld);
    this.renderer.setStyle(this.option[0], 'color', 'white');
    this.renderer.setStyle(this.option[1], 'color', '#4dd0e1');
  }
}
