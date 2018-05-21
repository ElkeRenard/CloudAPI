import { Component, OnInit, Renderer2 } from '@angular/core';
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
  private pages: any;
  public selectedRow: number;

  constructor(private exoticApi: ExoticService, private renderer: Renderer2) { }

  ngOnInit() {
    this.getList();
    this.setActive();
  }

  prev(){
    if(this.page>1){
      this.page -= 1;
      this.getList();
      this.setActive();
    }
   
   console.log(this.page);
  }

  next(){
    if(this.page<10){
      this.page +=1;
      this.getList();
      this.setActive();
    }
    console.log(this.page);

  }

  chosenPage(input:number){
    this.page = input;
    this.setActive();
    this.getList();
    console.log(this.page);
  }

  private getList(){
    this.selectedRow = null;
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

  private setActive(){
    this.pages = document.getElementsByClassName("page-item");
    console.log(this.pages);
    for(let item of this.pages){
      if(item.id == this.page){
        console.log(this.page, item)
        this.renderer.setStyle(item, 'background-color', '#4dd0e1');
      }
      else{
        this.renderer.setStyle(item, 'background-color', 'white');
      }
    }
  }

  public goToDetail(countryIn: ICountry, index:number){
    this.selectedRow = index;
    console.log("clicked: ",countryIn.Name);
    console.log("clicked",index);
    this.exoticApi.setSearchResultDetail(countryIn);
  }

}
