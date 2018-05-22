import { Component } from '@angular/core';
import { NavbarOpenComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListAllComponent } from './list-all/list-all.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailComponent } from './detail/detail.component';
import { ExoticService } from '././services/exotic.service';
import { RegionsComponent } from './regions/regions.component';
import { LoginComponent } from './login/login.component';
import { OpenComponent } from './open/open.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { NavbarRestrictedComponent } from './navbar-restricted/navbar-restricted.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
