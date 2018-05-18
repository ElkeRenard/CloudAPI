import { Component, OnInit } from '@angular/core';
import { ExoticService } from '.././services/exotic.service';
import { ICountry } from '.././services/exotic.service';
import { IRoot } from '.././services/exotic.service';

@Component({
  selector: 'list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {

  public completeList: ICountry[];
  private page:number=1;
  constructor(private exoticApi: ExoticService) { }

  ngOnInit() {
    this.getList();
  }

  prev(){
    if(this.page>1){
      this.page -= 1;
      this.getList();
    }
   
   console.log(this.page);
  }

  next(){
    if(this.page<10){
      this.page +=1;
      this.getList();
    }
    console.log(this.page);

  }

  private getList(){
    this.exoticApi.getAll(this.page).subscribe(root => {
      this.completeList = root.Response;
      console.log(this.completeList);
      },
      err => {
        console.log(err.message);
      },
      () => {
        console.log("Done loading complete list");
      });
  }

}
