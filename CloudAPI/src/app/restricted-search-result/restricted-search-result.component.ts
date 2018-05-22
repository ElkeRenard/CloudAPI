import { Component, OnInit, DoCheck } from '@angular/core';
import {ICountry, ExoticService } from '../services/exotic.service';

@Component({
  selector: 'restricted-search-result',
  templateUrl: './restricted-search-result.component.html',
  styleUrls: ['./restricted-search-result.component.scss']
})
export class RestrictedSearchResultComponent implements OnInit {

  private data;
  private option:string;
  public results: ICountry[];
  private selectedRow: number;  
  public buttonTekst: string="Save to My World";

  constructor(private API: ExoticService) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.data = this.API.getRestrictedSearchResultByName();
    this.results = this.data[0];
    this.option = this.data[1];
    if(this.option == "API"){
      this.buttonTekst = "Save to My World";
    }

    if(this.option == "MyWorld"){
      this.buttonTekst = "Delete";
    }
    console.log("results search: ",this.results);
  }

  public getDetail(countryIn: ICountry, index:number){
    this.selectedRow = index;
    console.log("clicked: ",countryIn.Name);
    console.log("clicked",index);
    this.API.setSearchResultDetail(countryIn);
  }

  public handleData(){
    if(this.option == "API"){
      //add country to my world
    }

    if(this.option == "MyWorld"){
      //delete country from my world
    }
  }
}
