import { Component } from '@angular/core';
import { NavbarOpenComponent } from './openPages/navbar/navbar.component';
import { HomepageComponent } from './openPages/homepage/homepage.component';
import { ListAllComponent } from './openPages/list-all/list-all.component';
import { SearchResultComponent } from './openPages/search-result/search-result.component';
import { DetailComponent } from './openPages/detail/detail.component';
import { ExoticService } from '././services/exotic.service';
import { RegionsComponent } from './openPages/regions/regions.component';
import { LoginComponent } from './login/login.component';
import { OpenComponent } from './openPages/open/open.component';
import { RestrictedComponent } from './restrictedPages/restricted/restricted.component';
import { NavbarRestrictedComponent } from './restrictedPages/navbar-restricted/navbar-restricted.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
