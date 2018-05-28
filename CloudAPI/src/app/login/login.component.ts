import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user;

  constructor( private socialAuthService: AuthService ) {}

  public auth(socialPlatform: string){
    if(!this.user){
      this.socialSignIn(socialPlatform);
    }
    if(this.user){
      this.signOut();
    }
  }
  
  private socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        this.user = userData.name;

        // Now sign-in with userData
            
      }
    );
  }

  private signOut(){
    this.socialAuthService.signOut();
  }

  ngOnInit() {

  }



}
