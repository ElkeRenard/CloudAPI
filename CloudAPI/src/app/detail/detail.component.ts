import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {ExoticService, ICountry } from '../services/exotic.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public country: ICountry;

  constructor(public exoticApi: ExoticService) { }

  ngOnInit() {
     
  }

  go(){
    this.exoticApi.getDetail("belize").subscribe(root => {
      this.country = root.Response;
      console.log("detail:" ,this.country);
    },
    err => {
      console.log(err.message);
    },
    () => {
      console.log("Done loading");
    });
  }

}
