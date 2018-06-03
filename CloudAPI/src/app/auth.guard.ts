import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './services/auth.service';
import { User } from './services/user';

@Injectable()
export class AuthGuard  {
  user: User;
  constructor(private afService: AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.afService.user$.subscribe(user => this.user = user);
      if (this.user) { 
        return true;
      } else {
        window.alert("You need to login to view this page"); 
        return false;
      }
  }
}
