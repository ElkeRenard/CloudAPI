import { Injectable } from '@angular/core';
import {ICountry } from './exotic.service';

@Injectable()
export class ShareService {

  private searchResult: ICountry[];
  private searchDetail: ICountry;
  private option: string;

  constructor() { }

  setSearchResultByName(result){
    this.searchResult = result;
  }

  getSearchResultByName(){
    return this.searchResult;
  }

  setRestrictedSearchResultByName(result, option){
    this.searchResult = result;
    this.option = option;
  }

  getRestrictedSearchResultByName(){
    return [this.searchResult, this.option];
  }

  setSearchResultDetail(input:ICountry, option){
    this.searchDetail = input;
    this.option = option;
  }

  getSearchResultDetail(){
    return [this.searchDetail, this.option];
  }

}
