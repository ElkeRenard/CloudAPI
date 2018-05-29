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
  public getAll(): Observable<IMyCountry[]>{
    return this.http.get<IMyCountry[]>(`${this.baseUrl}Countries`);
  }

  public getFavourites(): Observable<IMyCountry[]>{
    return this.http.get<IMyCountry[]>(`${this.baseUrl}Countries?favourite=true`);
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
  public getStories():Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories`);
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

  public getStoriesByCountry(country:ICountry):Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories?country=${country}`);
  }

  public getStoriesByAuthor(author: string):Observable<IStory[]>{
    return this.http.get<IStory[]>(`${this.baseUrl}Stories?name=${author}`);
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

export interface IStory{
  Country: string,
  StartDate: string,
  EndDate: string,
  Author: string,
  Travelstory: string
}

export interface IMyStory{
  Id: number,
  Country: string,
  StartDate: string,
  EndDate: string,
  Author: string,
  Travelstory: string
}

export interface IAuthor{
  Id: number,
  Name:string
}
