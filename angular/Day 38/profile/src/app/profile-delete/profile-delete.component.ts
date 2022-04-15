import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-delete',
  templateUrl: './profile-delete.component.html',
  styleUrls: ['./profile-delete.component.css']
})
export class ProfileDeleteComponent implements OnInit {

  constructor(private service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  id: FormControl = new FormControl('');
  deleteUser() {
    this.service.delete(this.id.value);
    this._router.navigate(["usersList"]);
  }

}
