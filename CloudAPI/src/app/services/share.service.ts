import { Injectable } from '@angular/core';
import {ICountry } from './exotic.service';
import { IStory } from './my-world.service';

@Injectable()
export class ShareService {

  private searchResult: ICountry[];
  private searchDetail: ICountry;
  private option: string;
  public Option: string;
  public DetailCountry:ICountry;
  public storiesByCountry;
  public storyDetail: IStory;
  public storyList: IStory[];

  constructor() { }

  //open pages
  setSearchResult(result){
    this.searchResult = result;
  }

  getSearchResult(){
    return this.searchResult;
  }

  //restricted pages, countries
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

}
