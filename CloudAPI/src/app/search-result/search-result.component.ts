import { Component, OnInit, DoCheck } from '@angular/core';
import {ICountry, ExoticService } from '../services/exotic.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, DoCheck {

  public results: ICountry[];
  private selectedRow: number;

  constructor(public API: ExoticService) { }

  ngOnInit() {
   
  }

  ngDoCheck(){
    this.results = this.API.getSearchResultByName();
    console.log("results search: ",this.results);
  }

  public getDetail(countryIn: ICountry, index:number){
    this.selectedRow = index;
    console.log("clicked: ",countryIn.Name);
    console.log("clicked",index);
    this.API.setSearchResultDetail(countryIn);
  }


}
