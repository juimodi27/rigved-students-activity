import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router : Router, private _builder : FormBuilder, private _service : UserService) { }

  ngOnInit(): void {
  }
  register : FormGroup = this._builder.group ({
    name : ['', Validators.required],
    password : ['', Validators.required]
  })
  handleRegister() {
    this._service.saveUser(this.register.value);
    this._router.navigate(['/login']);
  }

}
