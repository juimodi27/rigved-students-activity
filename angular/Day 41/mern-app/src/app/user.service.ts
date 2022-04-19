import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl : string = "http://localhost:3001/users";

  constructor(private _http : HttpClient) { }

  //find all users
  public getUsers() : Observable<any> {
    return this._http.get(this.baseUrl);
  }

  //store user which will have { _id, name, age }
  public storeUser(formValue : any) : Observable<any> {
    return this._http.post(this.baseUrl, formValue);
  }

  //find user by Id
  public getUserId(id : any) : Observable<any> {
    return this._http.get(this.baseUrl + '/' + id);
  }

  //delete user by Id
  public deleteUser(id : any) : Observable<any> {
    return this._http.delete(this.baseUrl + '/' + id);
  }

  //update user by Id
  public updateUser(id : any, age : any, user : any) : Observable<any> {
    return this._http.put(this.baseUrl + '/' + id + '/' + age, user);
  }
}
