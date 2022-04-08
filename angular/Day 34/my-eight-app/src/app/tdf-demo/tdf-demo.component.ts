import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  templateUrl: './tdf-demo.component.html',
  styleUrls: ['./tdf-demo.component.css']
})
export class TdfDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formSubmit(formValue: any) : void {
    console.log(formValue);
  }
}
