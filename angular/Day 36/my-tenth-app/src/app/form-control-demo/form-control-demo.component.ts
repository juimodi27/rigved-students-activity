import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username : FormControl = new FormControl('', Validators.required);
  password : FormControl = new FormControl('', Validators.compose([
    Validators.minLength(4), Validators.maxLength(10), Validators.required
  ]));

  handleSubmit() : void {
    console.log(this.username.value);
    console.log(this.password.value);
  }
}
