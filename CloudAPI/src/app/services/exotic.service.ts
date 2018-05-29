import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";


@Injectable()
export class ExoticService {

  private baseURL: string = "http://countryapi.gear.host/v1/Country/getCountries";

  constructor(private http: HttpClient) { }

  public getAll(page:number):Observable<IRoot>{
  
    return this.http.get<IRoot>(`${this.baseURL}?pLimit=25&pPage=${page}`);
  }

  public getCountriesByRegion(region, subregion):Observable<IRoot>{
    return this.http.get<IRoot>(`${this.baseURL}?pRegion=${region}&pSubRegion=${subregion}`)
  }

  public searchByName(name):Observable<IRoot>{
    return this.http.get<IRoot>(`${this.baseURL}?pName=${name}`);
  }

  public getDetail(fullname):Observable<IRoot>{
    return this.http.get<IRoot>(`${this.baseURL}?pName=${fullname}`);
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