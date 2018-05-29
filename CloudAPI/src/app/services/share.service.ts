import { Injectable } from '@angular/core';
import {ICountry } from './exotic.service';

@Injectable()
export class ShareService {

  private searchResult: ICountry[];
  private searchDetail: ICountry;
  private option: string;
  private user;

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

  setRestrictedSearchResultDetail(input, option){
    this.searchDetail = input;
    this.option = option;
  }

  getRestrictedSearchResultDetail(){
    return [this.searchDetail, this.option];
  }

  setSearchResultDetail(input:ICountry){
    this.searchDetail = input;
  }

  getSearchResultDetail(){
    return this.searchDetail;
  }

  setUser(user){
    this.user = user;
  }

  getUser(user){
    return this.user;
  }

}
