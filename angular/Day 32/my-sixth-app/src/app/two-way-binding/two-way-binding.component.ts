import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username : string | undefined = undefined;

  user : User = {firstname : '', lastname : ''};
  update() {
    this.user.firstname = 'Dummy';
  }
}
