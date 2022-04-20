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
  }
  username = new FormControl('');
  password = new FormControl('');
  handleLogin() {
    let name = this.username.value;
    let pass = this.password.value;
    this._router.navigate(['home', name, pass]);
  }
}
