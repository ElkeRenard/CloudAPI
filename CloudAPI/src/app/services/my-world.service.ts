import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import  {ICountry } from './exotic.service';

@Injectable()
export class MyWorldService {

  private baseUrl: string = "http://localhost:1768/api/Countries";
  private newCountry:IMyCountry;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IMyCountry[]>{
    return this.http.get<IMyCountry[]>(`http://localhost:1768/api/Countries`);
  }

  public addCountry(country: ICountry){
    return this.http.post(`http://localhost:1768/api/Countries`, country);
  }

  public deleteCountry(id: number){
    return this.http.delete(`http://localhost:1768/api/Countries/${id}`);
  }

  public searchByName(name: string){
    return this.http.get(`http://localhost:1768/api/Countries?name=${name}`);
  }

  public getDetail(id: number):Observable<IMyCountry>{
    return this.http.get<IMyCountry>(`http://localhost:1768/api/Countries/${id}`);
  }

  public updateCountry(country: IMyCountry){
    return this.http.put(`http://localhost:1768/api/Countries/`, country);
  }

  
}

export interface IMyCountry{

  Id: number,
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
  FlagPng:string,
  Favourite:boolean
}

