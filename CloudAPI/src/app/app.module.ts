import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ExoticService } from '././services/exotic.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup} from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular5-social-login";
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarOpenComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListAllComponent } from './list-all/list-all.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { DetailComponent } from './detail/detail.component';
import { RegionsComponent } from './regions/regions.component';
import { LoginComponent } from './login/login.component';
import { OpenComponent } from './open/open.component';
import { RestrictedComponent } from './restricted/restricted.component';
import { NavbarRestrictedComponent } from './navbar-restricted/navbar-restricted.component';
import { RestrictedHomeComponent } from './restricted-home/restricted-home.component';
import { RestrictedSearchResultComponent } from './restricted-search-result/restricted-search-result.component';
import { RestrictedDetailComponent } from './restricted-detail/restricted-detail.component';

const appRoutes: Routes=[
  {path: "home", component: OpenComponent},
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "restricted", component: RestrictedComponent}  
  /*{path: "**", component: PageNotFoundComponent}*/
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
    RestrictedDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    LeafletModule.forRoot(),
    SocialLoginModule,
    RouterModule.forRoot(appRoutes, {useHash:true})

  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [HttpClient, ExoticService,    
    {provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
