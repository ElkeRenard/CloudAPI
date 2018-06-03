import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;
  constructor(public afService: AuthService ) {}

 

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user);
  }

  login(){
    this.afService.loginWithGooglge();
  }

  logout(){
    this.afService.logout();
  }

}
