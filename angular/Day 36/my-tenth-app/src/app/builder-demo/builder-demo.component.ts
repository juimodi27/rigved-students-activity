import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-builder-demo',
  templateUrl: './builder-demo.component.html',
  styleUrls: ['./builder-demo.component.css']
})
export class BuilderDemoComponent implements OnInit {
  //this is a dependency injection feature
  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
  }
  profile : FormGroup = this.builder.group({
    firstname : [''],
    lastname : ['']
  });
  handleSubmit() {
    console.log(this.profile.value);
    this.profile.reset({});
  }

}
