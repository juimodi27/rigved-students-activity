import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-store',
  templateUrl: './profile-store.component.html',
  styleUrls: ['./profile-store.component.css']
})
export class ProfileStoreComponent implements OnInit {

  constructor(private builder : FormBuilder, private service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  profileForm : FormGroup = this.builder.group({
    name: ['', Validators.required],
    gender: ['', Validators.required],
    phoneNo: ['', Validators.compose(
      [Validators.maxLength(10), Validators.minLength(10), Validators.required])
    ],
    emailId: ['', Validators.required],
    address : this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.compose(
        [Validators.maxLength(6), Validators.minLength(6), Validators.required])
      ]
    })
  });
  saveForm() {
    this.service.save(this.profileForm.value);
    //userForm.value = {userId:value, name:value, dob:value}
    this._router.navigate(["success", this.profileForm.value.userId]);     //success/value
  }

}
