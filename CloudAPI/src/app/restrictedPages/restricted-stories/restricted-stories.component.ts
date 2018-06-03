import { Component, OnInit } from '@angular/core';
import { MyWorldService, IMyStory, IStory } from '../../services/my-world.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'restricted-stories',
  templateUrl: './restricted-stories.component.html',
  styleUrls: ['./restricted-stories.component.scss']
})
export class RestrictedStoriesComponent implements OnInit {

  public completeList;
  public storyDetail;
  private page:number=1;
  private isSort: string;
  public display='none';

  constructor(private myWorldAPI: MyWorldService, private share: ShareService) { }

  ngOnInit() {
    this.getList();
  }

  public getList(){
    switch(this.isSort){
      case 'author':
      case 'country':
        this.sort(this.isSort);
        break;
      default:
      case '': 
        this.myWorldAPI.getStories(this.page).subscribe(result => {
        this.completeList = result;
        console.log(result);
      },
      err => {
        console.log(err.message);
      },
      () => {
  
      });
      break;
    }
    
  }

  public prev(){
    if(this.page>1){
      this.page -= 1;
      this.getList();
    }
   
   //console.log(this.page);
  }

  public next(){
    if(this.page<10){
      this.page +=1;
      this.getList();
    }
    //console.log(this.page);

  }

  public sort(sortby: string){
    this.isSort = sortby;
    this.myWorldAPI.sort(this.isSort, this.page).subscribe(result => {
      this.completeList = result;
      console.log(this.completeList);
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

  openModal(story:IMyStory){
    this.display='block';
    this.myWorldAPI.getStory(story.id).subscribe(result => {
      this.share.storyDetail = result;
      console.log(this.share.storyDetail);
    },
    err => {console.log(err.message);
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
