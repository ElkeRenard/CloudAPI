import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class ExoticService {

  language:string;
  private searchResult: ICountry[];
  private searchDetail: ICountry;

  constructor(private http: HttpClient) { }

  getAll(page:number):Observable<IRoot>{
  
    return this.http.get<IRoot>(`http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=${page}`);
  }

  getRegion(region){}

  searchByName(name):Observable<IRoot>{
    return this.http.get<IRoot>(`http://countryapi.gear.host/v1/Country/getCountries?pName=${name}`);
  }

  setSearchResultByName(result){
    this.searchResult = result;
  }

  getSearchResultByName(){
    return this.searchResult;
  }

  setSearchResultDetail(input:ICountry){
    this.searchDetail = input;
  }

  getSearchResultDetail():ICountry{
    return this.searchDetail;
  }

  getDetail(fullname):Observable<IRoot>{
    return this.http.get<IRoot>(`http://countryapi.gear.host/v1/Country/getCountries?pName=${fullname}`);
  }
    
}

export interface IRoot{

  IsSuccess:boolean,
  UserMessage:string,
  TechnicalMessage:string,
  TotalCount:number,
  Response:ICountry[]
}


export interface ICountry{

  Name:string,
  Alpha2Code:string,
  Alpha3Code:string,
  NativeName:string,
  Region:string,
  SubRegion:string,
  Latitude:number,
  Longitude:number,
  Area:number,
  NumericCode:number,
  NativeLanguage:string,
  CurrencyCode:string,
  CurrencyName:string,
  CurrencySymbol:string,
  Flag:string,
  FlagPng:string
}