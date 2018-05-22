import { Component, OnInit, Renderer2 } from '@angular/core';
import {ExoticService, ICountry } from '../services/exotic.service';

@Component({
  selector: 'restricted-home',
  templateUrl: './restricted-home.component.html',
  styleUrls: ['./restricted-home.component.scss']
})
export class RestrictedHomeComponent implements OnInit {

  public list: ICountry[];
  private input: string;
  private API: boolean;
  private myWorld: boolean;
  private option: any;

  constructor(private exoticApi: ExoticService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  findCountry(){
    console.log((<HTMLInputElement>document.getElementById("search")).value);
    this.input = (<HTMLInputElement>document.getElementById("search")).value;
    if(this.input == ""){
      this.list = [];
      this.exoticApi.setSearchResultByName(this.list);
    }
    else{
      this.exoticApi.searchByName((<HTMLInputElement>document.getElementById("search")).value).subscribe(root => {
        this.list = root.Response;
        this.exoticApi.setSearchResultByName(this.list);
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
