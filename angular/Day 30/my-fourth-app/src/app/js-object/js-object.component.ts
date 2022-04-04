import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-object',
  templateUrl: './js-object.component.html',
  styleUrls: ['./js-object.component.css']
})
export class JsObjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employee = {id : 100, name : "Ajay", salary : 45200}
}
