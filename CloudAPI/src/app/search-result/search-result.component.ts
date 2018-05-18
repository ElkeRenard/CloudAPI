import { Component, OnInit, DoCheck, Renderer2, Inject } from '@angular/core';
import {ICountry, ExoticService } from '../services/exotic.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, DoCheck {

  public results: ICountry[];
  private selectedRow: number;

  constructor(public API: ExoticService, private renderer: Renderer2, @Inject(DOCUMENT) documen) { }

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
