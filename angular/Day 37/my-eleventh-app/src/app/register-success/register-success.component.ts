import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.css']
})
export class RegisterSuccessComponent implements OnInit {
  userId : number | undefined = undefined;
  constructor(private _ar : ActivatedRoute) { }

  ngOnInit(): void {
    this._ar.params.subscribe((p:Params) => {
      this.userId = p['uid']
    })
  }

}
