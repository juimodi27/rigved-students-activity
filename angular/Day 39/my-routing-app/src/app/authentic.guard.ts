import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticGuard implements CanActivate {
  constructor(private _router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('canActivate is called');
      let input = sessionStorage.getItem('un');
      let params = route.paramMap.get('name');
      if(params === input) {
        return true;
      } else {
        alert('You have to login first');
        this._router.navigate(['/login']);
        return false;
      }
  }
  
}
