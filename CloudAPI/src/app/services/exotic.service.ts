import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

@Injectable()
export class ExoticService {

  language:string;

  constructor(private http: HttpClient) { }

  getAll():Observable<IRoot>{
  
    return this.http.get<IRoot>('http://api.worldbank.org/v2/es/countries?format=json');
  }

  getCategory(category){}

  getSearchResult(name){}

  getDetail(fullname){}

}

export interface IRoot{

  "requestedPage": IPage,
  "countries": ICountry[]
}

export interface IPage{

  page: number,
  pages: number,
  per_page:number,
  total:number

}

export interface ICountry{

  id: string,
  iso2Code:string,
  name:string,
  region:{
    id:string,
    iso2code:string,
    value:string
  },
  adminregion:{
    id:string,
    iso2code:string,
    value:string
  },
  incomeLevel:{
    id:string,
    iso2code:string,
    value:string
  },
  lendingType:{
    id:string,
    iso2code:string,
    value:string
  },
  capitalCity:string,
  longitude:number,
  latitude:number
}