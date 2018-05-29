import { Component, OnInit } from '@angular/core';
import { MyWorldService, IMyCountry } from '../../services/my-world.service';
import { ShareService } from "../../services/share.service";

@Component({
  selector: 'restricted-list-all',
  templateUrl: './restricted-list-all.component.html',
  styleUrls: ['./restricted-list-all.component.scss']
})
export class RestrictedListAllComponent implements OnInit {

  public completeList: IMyCountry[];
  public selectedRow: number;
  public favourite: boolean;

  constructor(private myWorldAPI: MyWorldService, private share: ShareService) { }

  ngOnInit() {
    this.getList();
  }

  private getList(){
    this.selectedRow = null;
    this.myWorldAPI.getAll().subscribe(result => {
      this.completeList = result;
      //console.log(this.completeList);
      },
      err => {
        console.log(err.message);
      },
      () => {
        //console.log("Done loading complete list");
      });
  }

  public favo(change:boolean){
    if(change){
      this.favourite = !this.favourite;
    }

    if(this.favourite){
      this.myWorldAPI.getFavourites().subscribe(result => {
        this.completeList = result;
        //console.log(this.completeList);
        },
        err => {
          console.log(err.message);
        },
        () => {
          //console.log("Done loading complete list");
        });
    }
    else{
      this.getList();
    }
    
  }

  public goToDetail(countryIn: IMyCountry, index:number){
    this.selectedRow = index;
    //console.log("clicked: ",countryIn.Name);
    //console.log("clicked",index);
    this.share.setRestrictedSearchResultDetail(countryIn, "MyWorld");
  }

  public delete(country, index:number){
    //console.log("handle data: ",country);
      //delete country from my world
      this.myWorldAPI.deleteCountry(country.id).subscribe(result => {
        //console.log(result);
        this.favo(false);
      },
      err => {
        console.log(err.message);
      },
      () => {
        //console.log("done");
      });
  }

}
