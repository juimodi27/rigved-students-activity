import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  na:undefined | string=undefined;
  pass: undefined | string=undefined;
  arr: any=[];

  constructor(private _activateroute:ActivatedRoute,private _service:UserService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this._activateroute.parent?.params.subscribe((parameter:Params)=>{
      this.na=parameter['name'];
      this.pass=parameter['pass'];
    })
    console.log(this.na)
    this.arr=this._service.showData(this.na, this.pass) ;
  }

  add : FormGroup=this.fb.group({
    department:[''],
    employee:[''],
    salary:['']
  })
  

  handleAdd(){
    this._service.addData(this.add.value,this.na,this.pass)
  }

}
