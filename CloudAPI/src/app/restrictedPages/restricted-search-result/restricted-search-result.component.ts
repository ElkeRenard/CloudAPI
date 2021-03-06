import { Component, OnInit, DoCheck, Renderer2 } from '@angular/core';
import { ICountry, ExoticService } from '../../services/exotic.service';
import { ShareService } from '../../services/share.service';
import { MyWorldService } from '../../services/my-world.service';

@Component({
  selector: 'restricted-search-result',
  templateUrl: './restricted-search-result.component.html',
  styleUrls: ['./restricted-search-result.component.scss']
})
export class RestrictedSearchResultComponent implements OnInit {

  private data;
  private option:string;
  public results;
  private selectedRow: number;  
  public buttonTekst: string="Save to My World";

  constructor(private API: ExoticService, private share:ShareService, private myWorldAPI: MyWorldService, private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngDoCheck(){
    this.data = this.share.getRestrictedSearchResult();
    //console.log("data ",this.data[0]);
    this.results = this.data[0];
    this.share.Option = this.data[1];
    if(this.share.Option == "API"){
      this.buttonTekst = "Save to My World";
   
    }

    if(this.share.Option == "MyWorld"){
      this.buttonTekst = "Delete";
    }
    //console.log("results search: ",this.results);
  }

  public getDetail(countryIn: ICountry, index:number){
    this.selectedRow = index;
    //console.log("clicked: ",countryIn.Name);
    //console.log("clicked",index);
    this.share.setRestrictedDetail(countryIn, this.share.Option);
  }

  public handleData(country){
    //console.log("handle data: ",country);
    if(this.share.Option == "API"){
      //console.log(country);
      this.myWorldAPI.addCountry(country).subscribe(result => {
        console.log(result);
      },
      err => {
        console.log(err.message);
      },
      () => {
        //console.log("done");
      });
    }

    if(this.share.Option == "MyWorld"){
      //delete country from my world
      this.myWorldAPI.deleteCountry(country.id).subscribe(result => {
        //console.log(result);
        this.myWorldAPI.getCountries().subscribe( result => { /*foute logica*/
          //console.log("empty request", result)
          this.results = result;
          this.share.setRestrictedSearchResult(this.results, "MyWorld");
          //console.log(this.results);
        },
        err => {
          console.log(err.message);
        },
        () => {
          //console.log("done");
        });
      },
      err => {
        console.log(err.message);
      },
      () => {
        //console.log("done");
      });
    }
  }
}
