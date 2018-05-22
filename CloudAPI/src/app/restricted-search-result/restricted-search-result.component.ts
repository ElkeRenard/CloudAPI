import { Component, OnInit, DoCheck } from '@angular/core';
import {ICountry, ExoticService } from '../services/exotic.service';

@Component({
  selector: 'restricted-search-result',
  templateUrl: './restricted-search-result.component.html',
  styleUrls: ['./restricted-search-result.component.scss']
})
export class RestrictedSearchResultComponent implements OnInit {

  public results: ICountry[];
  private selectedRow: number;

  constructor(private API: ExoticService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.results = this.API.getSearchResultByName();
    console.log("results search: ",this.results);
  }

  public goToDetail(countryIn: ICountry, index:number){
    this.selectedRow = index;
    console.log("clicked: ",countryIn.Name);
    console.log("clicked",index);
    this.API.setSearchResultDetail(countryIn);
  }
}
