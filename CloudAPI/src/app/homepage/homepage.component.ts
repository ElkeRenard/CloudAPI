import { Component, OnInit } from '@angular/core';
import {ExoticService, ICountry } from '../services/exotic.service';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public result: ICountry;

  constructor(private exoticApi: ExoticService) { }

  ngOnInit() {
  }

  findCountry(){
    console.log( (<HTMLInputElement>document.getElementById("search")).value);
    this.exoticApi.getSearchResult((<HTMLInputElement>document.getElementById("search")).value).subscribe(root => {
      console.log(root);
      },
      err => {
        console.log(err.message);
      },
      () => {
        console.log("Done loading complete list");
      });
  
    }

}
