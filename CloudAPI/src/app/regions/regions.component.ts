import { Component, OnInit } from '@angular/core';
import { ExoticService, ICountry } from '../services/exotic.service';

@Component({
  selector: 'regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {

  public regionList: ICountry[];
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
  ]

  constructor(private exoticApi: ExoticService) { }

  ngOnInit() {
  }

  public async showCountriesRegion(region){
    this.exoticApi.getCountriesByRegion(region, "").subscribe(list => {
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

  public async showCountriesSubRegion(region, subregion){
    this.exoticApi.getCountriesByRegion(region, subregion).subscribe(list => {
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

}
