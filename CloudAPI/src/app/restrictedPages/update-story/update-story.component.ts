import { Component, OnInit } from '@angular/core';
import { MyWorldService } from '../../services/my-world.service';
import { RestrictedStoriesComponent } from '../restricted-stories/restricted-stories.component';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'update-story',
  templateUrl: './update-story.component.html',
  styleUrls: ['./update-story.component.scss']
})
export class UpdateStoryComponent implements OnInit {


  constructor(private myWorldAPI: MyWorldService, private modal: RestrictedStoriesComponent, private share: ShareService) { }

  ngOnInit() {
  }

  close(){
    this.modal.display='none';
  }

  public updateStory(){
    this.myWorldAPI.updateStory(this.share.storyDetail).subscribe(result => {
      console.log("recieve: ", result);
      this.modal.getList();
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

}
