import { Injectable } from '@angular/core';
import {ICountry } from './exotic.service';

@Injectable()
export class ShareService {

  private searchResult: ICountry[];
  private searchDetail: ICountry;
  private option: string;
  private user;
  public Option: string;

  constructor() { }

  //open pages
  setSearchResult(result){
    this.searchResult = result;
  }

  getSearchResult(){
    return this.searchResult;
  }

  setDetail(input:ICountry){
    this.searchDetail = input;
  }

  getDetail(){
    return this.searchDetail;
  }

  //restricted pages
  setRestrictedSearchResult(result, option){
    this.searchResult = result;
    this.option = option;
  }

  getRestrictedSearchResult(){
    return [this.searchResult, this.option];
  }

  setRestrictedDetail(input, option){
    this.searchDetail = input;
    this.option = option;
  }

  getRestrictedDetail(){
    return [this.searchDetail, this.option];
  }

  //authentication
  setUser(user){
    this.user = user;
  }

  getUser(user){
    return this.user;
  }

}
