import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //<app-child [name] = "parentProperty">
  @Input()
  name : string | undefined = undefined;

  //<app-child (data) = "parentProperty = $event">
  @Output()
  data : EventEmitter<number> = new EventEmitter<number>();
  counter = 0;
  send() : void {
    this.counter = this.counter + 1;
    this.data.emit(this.counter);   //sends data which will be present in $event
  }
}
