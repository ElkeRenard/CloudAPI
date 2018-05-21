import { Component, OnInit } from '@angular/core';
import { ExoticService, ICountry } from '../services/exotic.service';

@Component({
  selector: 'regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  public regionList: ICountry[];
  public region: string;
  public subregion: string;
  public selectedRow: number;
  public regions: string[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar"
  ];

  public subregions: string[][] = [
    ["Eastern Africa",
     "Middle Africa",
     "Northern Africa",
     "Southern Africa",
     "Western Africa"],
     [
      "Caribbean",
      "Central America",
      "Northern America",
      "South America"
     ],
     [
      "Central Asia",
      "Eastern Asia",
      "South-Eastern Asia",
      "Southern Asia",
      "Western Asia"
     ],
     [
      "Eastern Europe",
      "Northern Europe",
      "Southern Europe",
      "Western Europe"
     ],
     [
      "Australia and New Zealand",
      "Melanesia",
      "Micronesia",
      "Polynesia"
     ]
  ];

  /*public subregions = {
    "Africa": [
      "Eastern Africa",
      "Middle Africa",
      "Northern Africa",
      "Southern Africa",
      "Western Africa"
    ],
    "Americas": [
      "Caribbean",
      "Central America",
      "Northern America",
      "South America"
     ],
     "Asia":  [
      "Central Asia",
      "Eastern Asia",
      "South-Eastern Asia",
      "Southern Asia",
      "Western Asia"
     ],
     "Europe":      [
      "Eastern Europe",
      "Northern Europe",
      "Southern Europe",
      "Western Europe"
     ],
     "Oceania":      [
      "Australia and New Zealand",
      "Melanesia",
      "Micronesia",
      "Polynesia"
     ],
     "Polar":[]
  };*/

  constructor(private exoticApi: ExoticService) { 
    
  }

  ngOnInit() {
  }

  public showCountriesRegion(region){
    this.exoticApi.getCountriesByRegion(region, "").subscribe(list => {
      this.region = region;
      this.subregion = "";
      this.regionList = list.Response;
      console.log(this.regionList);
    },
    error => {
      console.log(error.message);
    },
    () => {
      console.log("done loading region list");
    });
  }

  public showCountriesSubRegion(region, subregion){
    console.log("subregion: ", region, subregion);
    this.exoticApi.getCountriesByRegion(region, subregion).subscribe(list => {
      this.region = region;
      this.subregion = subregion;
      this.regionList = list.Response;
      console.log(list);
    },
    error => {
      console.log(error.message);
    },
    () => {
      console.log("done loading region list");
    });
  }

  public goToDetail(countryIn: ICountry, index:number){
    this.selectedRow = index;
    console.log("clicked: ",countryIn.Name);
    console.log("clicked",index);
    this.exoticApi.setSearchResultDetail(countryIn);
  }

}
