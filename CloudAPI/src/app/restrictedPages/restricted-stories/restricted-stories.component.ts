import { Component, OnInit } from '@angular/core';
import { MyWorldService, IMyStory } from '../../services/my-world.service';

@Component({
  selector: 'restricted-stories',
  templateUrl: './restricted-stories.component.html',
  styleUrls: ['./restricted-stories.component.scss']
})
export class RestrictedStoriesComponent implements OnInit {

  public completeList;
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
}
