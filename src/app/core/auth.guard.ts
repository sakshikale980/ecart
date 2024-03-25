import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  private can: boolean = false;

  setCanActivate(can: any) {
    this.can = can;
  }

  canActivate() {
    if (localStorage.getItem('isLogin')) {
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }

}
