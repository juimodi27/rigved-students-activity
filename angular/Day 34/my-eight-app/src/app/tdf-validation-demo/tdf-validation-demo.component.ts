import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-validation-demo',
  templateUrl: './tdf-validation-demo.component.html',
  styleUrls: ['./tdf-validation-demo.component.css']
})
export class TdfValidationDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(formValue: any) : void {
    console.log(formValue);
  }
}
