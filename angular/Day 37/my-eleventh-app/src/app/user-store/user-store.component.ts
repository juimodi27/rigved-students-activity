import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-store',
  templateUrl: './user-store.component.html',
  styleUrls: ['./user-store.component.css']
})
export class UserStoreComponent implements OnInit {

  constructor(private builder : FormBuilder, private service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  userForm : FormGroup = this.builder.group({
    userId : [''], name : [''], dob : ['']
  });
  saveForm() {
    this.service.save(this.userForm.value);
    //userForm.value = {userId:value, name:value, dob:value}
    this._router.navigate(["success", this.userForm.value.userId]);     //success/value
  }
}
