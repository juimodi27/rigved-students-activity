import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  username = new FormControl('');
  handleLogin() {
    let name = this.username.value;
    // store the name in the sessionStorage, actually you need to check in the DB first
    sessionStorage.setItem('un', name);
    this._router.navigate(['success', name]);     // success/:name
  }
}
