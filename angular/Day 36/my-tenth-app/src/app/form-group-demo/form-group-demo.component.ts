import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-demo',
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.css']
})
export class FormGroupDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profile : FormGroup = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required)
  })
  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({})
    //this.profile.controls['firstname'].setValue('hello world')
  }
}
