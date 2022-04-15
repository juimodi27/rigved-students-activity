import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  items : undefined | any[] = undefined;

  constructor(public service : UserService) { }

  ngOnInit(): void {
    this.items = this.service.getUsers();
  }

}
