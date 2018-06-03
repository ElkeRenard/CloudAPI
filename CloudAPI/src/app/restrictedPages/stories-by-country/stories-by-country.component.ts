import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { RestrictedListAllComponent } from '../restricted-list-all/restricted-list-all.component';
import { MyWorldService } from '../../services/my-world.service';

@Component({
  selector: 'stories-by-country',
  templateUrl: './stories-by-country.component.html',
  styleUrls: ['./stories-by-country.component.scss']
})
export class StoriesByCountryComponent implements OnInit {

  constructor(private share: ShareService, private modal: RestrictedListAllComponent, private myWorldAPI: MyWorldService) { }

  ngOnInit() {
  }

  close(){

      this.modal.display='none';
      this.share.storiesByCountry=null; 
  }

  public deleteStory(story){
    console.log(story);
    this.myWorldAPI.deleteStory(story.id).subscribe(result => {
      console.log(story.country);
      this.myWorldAPI.getStoriesByCountry(story.country).subscribe(list => {
        console.log(list);
        this.share.storiesByCountry = [story.name,list];
      },
      err => {
        console.log(err.message);
      },
      () => {
  
      });
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }
}