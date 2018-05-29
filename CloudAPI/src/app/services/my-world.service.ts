import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";
import  {ICountry } from './exotic.service';

@Injectable()
export class MyWorldService {

  private baseUrl: string = "http://localhost:1768/api/";

  constructor(private http: HttpClient) { }

  //calls to countries
  public getCountries(page:number=null, length:number=null): Observable<IMyCountry[]>{
    return this.http.get<IMyCountry[]>(`${this.baseUrl}Countries?page=${page}&length=${length}`);
    
  }

  public getFavourites(page:number=null, length:number=null): Observable<IMyCountry[]>{
    return this.http.get<IMyCountry[]>(`${this.baseUrl}Countries?favourite=true&page=${page}&length=${length}`);
  }

  public addCountry(country: ICountry){
    return this.http.post(`${this.baseUrl}Countries`, country);
  }

  public deleteCountry(id: number){
    return this.http.delete(`${this.baseUrl}Countries/${id}`);
  }

  public searchByName(name: string){
    return this.http.get(`${this.baseUrl}Countries?name=${name}`);
  }

  public getDetail(id: number):Observable<IMyCountry>{
    return this.http.get<IMyCountry>(`${this.baseUrl}Countries/${id}`);
  }

  public updateCountry(country: IMyCountry){
    return this.http.put(`${this.baseUrl}Countries/`, country);
  }

  //calls to stories
  public getStories(page:number=null, length:number=null):Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories?page=${page}&length=${length}`);
  }

  public deleteStory(id:number){
    return this.http.delete(`${this.baseUrl}Stories/${id}`);
  }

  public getStory(id:number):Observable<IStory>{
    return this.http.get<IStory>(`${this.baseUrl}Stories/${id}`);
  }

  public updateStory(story:IStory){
    return this.http.put(`${this.baseUrl}Stories`, story);
  }

  public addStory(story:IStory){
    return this.http.post(`${this.baseUrl}Stories`, story);
  }

  public sort(sortby: string, dir:string="asc"):Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories?sort=${sortby}`);
  }

  /*public getStoriesByCountry(country:ICountry):Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories?country=${country}`);
  }

  public getStoriesByAuthor(author: string):Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories?name=${author}`);
  }*/
}

export interface IMyCountry{

  id: number,
  name:string,
  alpha2Code:string,
  alpha3Code:string,
  nativeName:string,
  region:string,
  subRegion:string,
  latitude:number,
  longitude:number,
  area:number,
  numericCode:number,
  nativeLanguage:string,
  currencyCode:string,
  currencyName:string,
  currencySymbol:string,
  flag:string,
  flagPng:string,
  favourite:boolean
}

export interface IStory{
  Country: string,
  StartDate: string,
  EndDate: string,
  Author: string,
  Travelstory: string
}

export interface IMyStory{
  id: number,
  country: string,
  startDate: string,
  endDate: string,
  author: string,
  travelstory: string
}

export interface IAuthor{
  Id: number,
  Name:string
}
