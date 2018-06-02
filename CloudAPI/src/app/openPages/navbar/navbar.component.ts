import { Component, OnInit } from '@angular/core';
import { ExoticService } from '../../services/exotic.service';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'navbarOpen',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarOpenComponent implements OnInit {
  private id: string;

  constructor(private exoticAPI: ExoticService, private share: ShareService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.id = (<HTMLInputElement>document.getElementById("Search")).value;
    this.exoticAPI.searchById(this.id).subscribe(result => {
      this.share.DetailCountry = result.Response[0];
    },
    err => {
      console.log(err.message);
    },
    () => {

    });
  }

}
