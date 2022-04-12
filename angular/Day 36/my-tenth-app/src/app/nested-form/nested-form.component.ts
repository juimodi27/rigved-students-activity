import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
  }
  profile : FormGroup = this.builder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    address: this.builder.group({
      state: ['', Validators.required],
      city: ['', Validators.required],
      //pin: ['', Validators.required]
      pin: ['', Validators.compose([
        Validators.minLength(6), Validators.required
      ])]
    }),
  });
  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }
}
