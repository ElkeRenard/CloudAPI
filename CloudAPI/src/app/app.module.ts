import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExoticService } from '././services/exotic.service';
import { MyWorldService } from '././services/my-world.service';
import { ShareService } from '././services/share.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule} from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular5-social-login";
import { RouterModule, Routes } from '@angular/router';

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
  {path: "restricted", component: RestrictedComponent}
  //{path: "**", redirectTo: "home", pathMatch: 'full'}
]

export function getAuthServiceConfigs() {
  const id = "977080412179-vme2o8kuklc86n34c2i17tsnp6v1556m.apps.googleusercontent.com";
  
  let config = new AuthServiceConfig(
      [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(id)
        },
      ]
  );
  return config;
}

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
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    LeafletModule.forRoot(),
    SocialLoginModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash:true})

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClient,
    ExoticService,
    MyWorldService,
    ShareService,  
    {provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
