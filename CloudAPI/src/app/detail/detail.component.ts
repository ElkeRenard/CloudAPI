import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import {ExoticService, ICountry } from '../services/exotic.service';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  public country: ICountry;
  private input:ICountry;

  constructor(public exoticApi: ExoticService) { }

  ngOnChanges(){console.log("onchanges");}
  ngDoCheck(){console.log("docheck");}
  ngAfterContentInit(){console.log("aftercontentinit");}
  ngAfterContentChecked(){console.log("aftercontentchecked");}
  ngAfterViewInit(){console.log("afterviewinit");}
  ngAfterViewChecked(){console.log("afterviewchecked");}
  ngOnDestroy(){
    console.log("destroy");
  }
  ngOnInit() {console.log("oninit");}

  public go(){
    if(this.exoticApi.getSearchResultDetail() != null){
      this.input = this.exoticApi.getSearchResultDetail();
      this.exoticApi.getDetail(this.input.Name).subscribe(root => {
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

}
