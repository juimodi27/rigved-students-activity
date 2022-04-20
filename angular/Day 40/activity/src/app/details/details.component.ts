import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  na:undefined | string=undefined;
  pass: undefined | string=undefined;
  arr: any=[];

  constructor(private _activateroute : ActivatedRoute, private _service : UserService) { }

  ngOnInit(): void {
    this._activateroute.parent?.params.subscribe((parameter:Params)=>{
      this.na=parameter['name'];
      this.pass=parameter['pass'];
    })
    this.arr=this._service.showData(this.na, this.pass) ;
  }
  
}
