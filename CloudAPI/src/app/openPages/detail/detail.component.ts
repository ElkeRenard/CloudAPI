import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import * as L from 'leaflet';
import {ExoticService, ICountry } from '../../services/exotic.service';
import { latLng, tileLayer } from 'leaflet';
import {ShareService } from '../../services/share.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, DoCheck{


  constructor(public exoticApi: ExoticService,private share: ShareService) { }

  ngOnInit() {
  }

  ngDoCheck(){
   
  }
}