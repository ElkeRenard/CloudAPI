import { Component, OnInit } from '@angular/core';
import {ExoticService, ICountry } from '../../services/exotic.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public list: ICountry[];
  private input: string;

  constructor(private exoticApi: ExoticService) { }

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
}
