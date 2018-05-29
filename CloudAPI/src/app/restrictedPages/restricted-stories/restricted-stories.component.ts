import { Component, OnInit } from '@angular/core';
import { MyWorldService, IMyStory, IStory } from '../../services/my-world.service';

@Component({
  selector: 'restricted-stories',
  templateUrl: './restricted-stories.component.html',
  styleUrls: ['./restricted-stories.component.scss']
})
export class RestrictedStoriesComponent implements OnInit {

  public completeList;
  public storyDetail;

  constructor(private myWorldAPI: MyWorldService) { }

  ngOnInit() {
    this.getList();
  }

  private getList(){
    this.myWorldAPI.getStories().subscribe(result => {
      this.completeList = result;
      console.log(result);
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

  public sort(sortby: string){
    this.myWorldAPI.sort(sortby).subscribe(result => {
      this.completeList = result;
      console.log(this.completeList);
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

  public getDetail(story:IMyStory){
    this.myWorldAPI.getStory(story.id).subscribe(result => {
      this.storyDetail = result;
      console.log(this.storyDetail);
    },
    err => {console.log(err.message);
    },
    () => {

    });
  }

  public updateStory(){
    this.myWorldAPI.updateStory(this.storyDetail).subscribe(result => {
      console.log("recieve: ", result);
      this.getList();
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

  public deleteStory(story){
    this.myWorldAPI.deleteStory(story.id).subscribe(result => {
      this.completeList = result;
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

}
