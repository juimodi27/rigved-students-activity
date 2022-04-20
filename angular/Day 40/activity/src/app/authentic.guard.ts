import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticGuard implements CanActivate {

  constructor(public service: UserService, private _router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let arr=this.service.getUser();
      console.log(arr)
      let name=route.paramMap.get('name');
      let password=route.paramMap.get('pass')
      
      for(let i = 0; i<arr.length; i++){
        if(name===arr[i].name && password===arr[i].password){
          return true;
        }
      }
      alert('Incorrect Username/Password');
        this._router.navigate(['/login']);
        return false;
  
    }
  
}
