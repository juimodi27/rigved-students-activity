import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-demo',
  templateUrl: './structural-demo.component.html',
  styleUrls: ['./structural-demo.component.css']
})
export class StructuralDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message = "Welcome to Angular";
  status = false;
  exists = true;
  info = undefined;
  courses = ["Javascript", "Python", "Java", "C#"]

}
