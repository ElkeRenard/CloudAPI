import { Component, OnInit } from '@angular/core';
import { ExoticService } from '.././services/exotic.service';
import { ICountry } from '.././services/exotic.service';
import { IPage } from '.././services/exotic.service';
import { IRoot } from '.././services/exotic.service';

@Component({
  selector: 'list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {

  public completeList: IRoot;
  constructor(private exoticApi: ExoticService) { }

  ngOnInit() {

    this.exoticApi.getAll().subscribe(root => {
    this.completeList = root[1];
    },
    err => {
      console.log(err.message);
    },
    () => {
      console.log("Done loading complete list");
    });

  }

  prev(){
   
  }

  next(){

  }

}
