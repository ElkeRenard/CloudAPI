import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase/app';

//services
import { ExoticService } from '././services/exotic.service';
import { MyWorldService } from '././services/my-world.service';
import { ShareService } from '././services/share.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';

//components
import { AppComponent } from './app.component';
import { NavbarOpenComponent } from './openPages/navbar/navbar.component';
import { HomepageComponent } from './openPages/homepage/homepage.component';
import { ListAllComponent } from './openPages/list-all/list-all.component';
import { SearchResultComponent } from './openPages/search-result/search-result.component';
import { DetailComponent } from './openPages/detail/detail.component';
import { RegionsComponent } from './openPages/regions/regions.component';
import { LoginComponent } from './login/login.component';
import { OpenComponent } from './openPages/open/open.component';
import { RestrictedComponent } from './restrictedPages/restricted/restricted.component';
import { NavbarRestrictedComponent } from './restrictedPages/navbar-restricted/navbar-restricted.component';
import { RestrictedHomeComponent } from './restrictedPages/restricted-home/restricted-home.component';
import { RestrictedSearchResultComponent } from './restrictedPages/restricted-search-result/restricted-search-result.component';
import { RestrictedDetailComponent } from './restrictedPages/restricted-detail/restricted-detail.component';
import { RestrictedListAllComponent } from './restrictedPages/restricted-list-all/restricted-list-all.component';
import { RestrictedStoriesComponent } from './restrictedPages/restricted-stories/restricted-stories.component';



const appRoutes: Routes=[
  {path: "home", component: OpenComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "restricted", component: RestrictedComponent, canActivate:[AuthGuard]}
  //{path: "**", redirectTo: "home", pathMatch: 'full'}
];

firebase.initializeApp(environment.firebase);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);



@NgModule({
  declarations: [
    AppComponent,
    NavbarOpenComponent,
    HomepageComponent,
    ListAllComponent,
    SearchResultComponent,
    DetailComponent,
    RegionsComponent,
    LoginComponent,
    OpenComponent,
    RestrictedComponent,
    NavbarRestrictedComponent,
    RestrictedHomeComponent,
    RestrictedSearchResultComponent,
    RestrictedDetailComponent,
    RestrictedListAllComponent,
    RestrictedStoriesComponent
  ],
  imports: [ 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    LeafletModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash:true})

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClient,
    ExoticService,
    MyWorldService,
    ShareService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
