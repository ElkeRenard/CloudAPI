import { Component, OnInit,Renderer2 } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { MyWorldService, IStory } from '../../services/my-world.service';
import { RestrictedDetailComponent } from '../restricted-detail/restricted-detail.component';


@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  public story: IStory;
  private saveStoryButton;

  constructor(private share: ShareService, private myWorldAPI: MyWorldService, private modal: RestrictedDetailComponent, private renderer: Renderer2) { }

  ngOnInit() {
  }

  close(){
    this.modal.display='none';
  }

  public saveStory(){
    this.saveStoryButton = document.getElementById("saveStoryButton");
    this.story = {
      Country:"",
      StartDate : "",
      EndDate : "",
      Author : "",
      Travelstory: ""
    };
    this.story.Country = this.share.getRestrictedDetail()[0].name; //geeft onterecht error
    this.story.StartDate = (document.getElementById("startDate") as HTMLInputElement).value;
    this.story.EndDate = (document.getElementById("endDate") as HTMLInputElement).value;
    this.story.Author = (document.getElementById("author") as HTMLInputElement).value;
    this.story.Travelstory = (document.getElementById("story") as HTMLInputElement).value
    this.myWorldAPI.addStory(this.story).subscribe(result => {
      console.log("recieve: ", result);
      this.renderer.setStyle(this.saveStoryButton, 'background-color', '#00C851');
      (document.getElementById("startDate") as HTMLInputElement).value ="";
      (document.getElementById("endDate") as HTMLInputElement).value="";
      (document.getElementById("author") as HTMLInputElement).value="";
      (document.getElementById("story") as HTMLInputElement).value="";
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

}
