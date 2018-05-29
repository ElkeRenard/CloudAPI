import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { MyWorldService, IMyCountry, IStory, IAuthor } from '../../services/my-world.service';

@Component({
  selector: 'story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.scss']
})
export class StoryModalComponent implements OnInit {

  private country: IMyCountry;
  private data;

  public story: IStory ={
    Country: "Belarus",
    StartDate: "20/05/2018",
    EndDate: "24/05/2018",
    Author: "elke",
    Travelstory: ""
  }

  constructor(private share: ShareService, private myWorldAPI: MyWorldService) { }

  ngOnInit() {

  }

  public saveStory(){
    this.data = this.share.getRestrictedSearchResultDetail();
    console.log(this.data);
    this.country = this.data[0];
    this.story.Country = this.country.name;
    console.log("go: ",this.story);
    this.myWorldAPI.addStory(this.story).subscribe(result => {
      console.log("recieve: ", result);
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

}
