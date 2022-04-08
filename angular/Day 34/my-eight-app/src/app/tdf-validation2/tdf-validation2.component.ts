import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tdf-validation2',
  templateUrl: './tdf-validation2.component.html',
  styleUrls: ['./tdf-validation2.component.css']
})
export class TdfValidation2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  handleSubmit(formValue: any) : void {
    console.log(formValue);
  }
}
