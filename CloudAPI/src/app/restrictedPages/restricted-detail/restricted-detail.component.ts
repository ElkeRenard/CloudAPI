import { Component, OnInit, Input, OnChanges, Renderer2 } from '@angular/core';
import * as L from 'leaflet';
import {ExoticService, ICountry } from '../../services/exotic.service';
import { latLng, tileLayer } from 'leaflet';
import {ShareService } from '../../services/share.service';
import { MyWorldService, IStory, IMyCountry } from '../../services/my-world.service';

@Component({
  selector: 'restricted-detail',
  templateUrl: './restricted-detail.component.html',
  styleUrls: ['./restricted-detail.component.scss']
})
export class RestrictedDetailComponent implements OnInit {

  private lat: number=46.879966;
  private long: number=-121.726909;
  public country;
  private input;
  public options;
  private data;
  public display='none';

  constructor(public exoticApi: ExoticService, private share: ShareService, private myWorldAPI: MyWorldService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  public go(){
    this.country = null;
    if(this.share.getRestrictedDetail() != null){
      this.data = this.share.getRestrictedDetail();
      //console.log("data ",this.data[0]);
      this.input = this.data[0];
      this.share.Option = this.data[1];
      if(this.share.Option == "API"){
        this.exoticApi.getDetail(this.input.Name).subscribe(root => {
          this.country = root.Response[0];
          this.setMap(this.country.Latitude, this.country.Longitude);
        },
        err => {
          console.log(err.message);
        },
        () => {
          //console.log("Done loading");
        });
      }

      if(this.share.Option == "MyWorld"){}
      //console.log(this.input.id);
      this.myWorldAPI.getDetail(this.input.id).subscribe(root => {
        this.country = root;
       this.setMap(this.country.latitude, this.country.longitude);
      },
      err => {
        console.log(err.message);
      },
      () => {
        //console.log("Done loading");
      });
    }
  }

  public save(){
    this.myWorldAPI.updateCountry(this.country).subscribe(result => {
      //console.log(result);
    },
    error => {
      console.log(error.message);
    },
    () => {}
    );
  }

  private setMap(lat, long){
    this.lat = lat;
    this.long = long;
    //console.log("detail:" ,this.country);
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
  }

  openModal(country: IMyCountry){
    this.display='block';
    
  }
}
