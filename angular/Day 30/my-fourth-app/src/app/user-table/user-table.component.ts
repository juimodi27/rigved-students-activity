import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user = [
    {name : "Alex", gender : "Male", address : {state : "KA", city : "BLR"}},
    {name : "Jennifer", gender : "Female", address : {state : "MH", city : "MUM"}},
    {name : "Zaheer", gender : "Male", address : {state : "MH", city : "PUN"}}]
}
