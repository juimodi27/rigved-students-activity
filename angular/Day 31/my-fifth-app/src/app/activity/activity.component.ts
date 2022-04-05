import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstname : string | undefined = undefined;
  lastname : string | undefined = undefined;

  array:Array<{first: string, last: string}>=[]
  save(fn : string, ln : string) : void {
    this.firstname = fn;
    this.lastname = ln;
    let object={first:this.firstname,last:this.lastname}
    this.array.push(object)
  }
}
