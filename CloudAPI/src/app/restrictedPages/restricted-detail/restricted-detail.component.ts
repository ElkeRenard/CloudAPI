import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import {ExoticService, ICountry } from '../../services/exotic.service';
import { latLng, tileLayer } from 'leaflet';
import {ShareService } from '../../services/share.service';

@Component({
  selector: 'restricted-detail',
  templateUrl: './restricted-detail.component.html',
  styleUrls: ['./restricted-detail.component.scss']
})
export class RestrictedDetailComponent implements OnInit {

  private lat: number=46.879966;
  private long: number=-121.726909;
  public country: ICountry;
  private input:ICountry;
  public options;

  constructor(public exoticApi: ExoticService, private share: ShareService) { }

  ngOnInit() {
  }

  public go(){
    this.country = null;
    if(this.share.getSearchResultDetail() != null){
      this.input = this.share.getSearchResultDetail();
      this.exoticApi.getDetail(this.input.Name).subscribe(root => {
        this.country = root.Response[0];
        this.lat = this.country.Latitude;
        this.long = this.country.Longitude;
        console.log("detail:" ,this.country);
        this.options = {
          layers: [
            tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
              maxZoom: 20,
              subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
              detectRetina: true
            })
          ],
          zoom: 6,
          center: latLng([ this.lat, this.long ])
        };
      },
      err => {
        console.log(err.message);
      },
      () => {
        console.log("Done loading");
      });
    }

  }
}
