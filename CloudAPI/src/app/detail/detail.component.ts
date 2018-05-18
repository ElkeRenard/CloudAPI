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

  public go(){
    this.exoticApi.getDetail("china").subscribe(root => {
      this.country = root.Response[0];
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
