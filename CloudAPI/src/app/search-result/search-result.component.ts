import { Component, OnInit } from '@angular/core';
import {ICountry, ExoticService } from '../services/exotic.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  public results: ICountry[];
  constructor(public API: ExoticService) { }

  ngOnInit() {
   
  }

  ngDoCheck(){
    console.log("docheck");
    this.results = this.API.getSearchResultByName();
    console.log(this.results);
  }



}
