import { Component, OnInit, DoCheck } from '@angular/core';
import {ICountry, ExoticService } from '../services/exotic.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, DoCheck {

  public results: ICountry[];

  constructor(public API: ExoticService) { }

  ngOnInit() {
   
  }

  ngDoCheck(){
    this.results = this.API.getSearchResultByName();
    console.log("results search: ",this.results);
  }

  public goToDetail(countryIn: ICountry){
    console.log("clicked: ",countryIn);
   
    this.API.setSearchResultDetail(countryIn);
  }


}
