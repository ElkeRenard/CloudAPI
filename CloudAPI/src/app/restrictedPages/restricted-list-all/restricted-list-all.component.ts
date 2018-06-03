import { Component, OnInit } from '@angular/core';
import { MyWorldService, IMyCountry } from '../../services/my-world.service';
import { ShareService } from "../../services/share.service";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'restricted-list-all',
  templateUrl: './restricted-list-all.component.html',
  styleUrls: ['./restricted-list-all.component.scss']
})
export class RestrictedListAllComponent implements OnInit {

  public completeList: IMyCountry[];
  public selectedRow: number;
  public favourite: boolean;
  private page: number=1;
  display='none';

  constructor(private myWorldAPI: MyWorldService, private share: ShareService, private afService: AuthService) { }

  ngOnInit() {
    this.getList();
  }

  private getList(change?:boolean){
    this.selectedRow = null;
    if(change){
      this.favourite = !this.favourite;
      this.page = 1;
    }

    if(this.favourite){
      this.myWorldAPI.getFavourites(this.page).subscribe(result => {
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
      this.myWorldAPI.getCountries(this.page).subscribe(result => {
        this.completeList = result;
        //console.log("page: ", this.page);
        //console.log(this.completeList);
        },
        err => {
          console.log(err.message);
        },
        () => {
          //console.log("Done loading complete list");
        });
    }
    
  }

  public prev(){
    if(this.page>1){
      this.page -= 1;
      this.getList();
    }
   
   //console.log(this.page);
  }

  public next(){
    if(this.page<10){
      this.page +=1;
      this.getList();
    }
    //console.log(this.page);

  }

  public goToDetail(countryIn: IMyCountry, index:number){
    this.selectedRow = index;
    //console.log("clicked: ",countryIn.Name);
    //console.log("clicked",index);
    this.share.setRestrictedDetail(countryIn, "MyWorld");
  }

  public delete(country){
    //console.log("handle data: ",country);
      //delete country from my world
      this.myWorldAPI.deleteCountry(country.id).subscribe(result => {
        //console.log(result);
        this.getList(false);
      },
      err => {
        console.log(err.message);
      },
      () => {
        //console.log("done");
      });
  }

  openModal(country: IMyCountry){
    this.display='block';
    this.myWorldAPI.getStoriesByCountry(country.name).subscribe(result => {
      console.log(result);
      this.share.storiesByCountry = [country.name,result];
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

}
