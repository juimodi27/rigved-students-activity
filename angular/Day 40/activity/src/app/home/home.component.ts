import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username : undefined | string = undefined;
  pass : undefined | string = undefined;
  arr : any = [];

  constructor(private _activateroute : ActivatedRoute, private _service : UserService, private _builder : FormBuilder) { }

  ngOnInit(): void {
    this._activateroute.params.subscribe((parameter : Params) => {
      this.username = parameter['name'];
      this.pass = parameter['pass'];
    })
    console.log(this.username)
    this.arr = this._service.showData(this.username, this.pass);
  }

}
