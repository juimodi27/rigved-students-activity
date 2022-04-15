import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  items : undefined | any[] = undefined;

  constructor(public service : UserService) { }

  //this is automatically called after the constructor
  ngOnInit(): void {
    this.items = this.service.getUsers();
  }

}
