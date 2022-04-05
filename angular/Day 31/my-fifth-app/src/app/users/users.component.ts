import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users : any = [
    {name : "Alexander", gender : "Male", address : {state : "KA", city : "BLR"}},
    {name : "Sony", gender : "Female", address : {state : "MH", city : "MBI"}},
    {name : "Raj", gender : "Male", address : {state : "KA", city : "MYS"}}
  ]
}
