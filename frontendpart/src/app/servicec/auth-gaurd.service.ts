import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationServicec } from './authentication.servicec';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdServicec implements CanActivate {

  constructor(private router: Router,
    private authServicec: AuthenticationServicec) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authServicec.isUserLoggedIn())
      return true;

    this.router.navigate(['login']);
    return false;

  }

}