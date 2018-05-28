import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';
import { IMyCountry } from '../../services/my-world.service';

@Component({
  selector: 'story-modal',
  templateUrl: './story-modal.component.html',
  styleUrls: ['./story-modal.component.scss']
})
export class StoryModalComponent implements OnInit {

  public Country: IMyCountry;

  constructor(private share: ShareService) { }

  ngOnInit() {
    var data =this.share.getRestrictedSearchResultDetail();
    this.Country = data[0].name;
    console.log(data);
  }

}
