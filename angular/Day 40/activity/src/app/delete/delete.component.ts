import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  na:undefined | string=undefined;
  pass: undefined | string=undefined;
  arr: any=[];
  constructor(private _activateroute:ActivatedRoute, private _service : UserService) { }

  ngOnInit(): void {
    this._activateroute.parent?.params.subscribe((parameter:Params)=>{
      this.na=parameter['name'];
      this.pass=parameter['pass'];
    })
    this.arr=this._service.showData(this.na, this.pass) ;
  }

  handleDelete(depart:any, employ: any, sal: any){
    this._service.deleteData(this.na,this.pass,depart,employ,sal);
  }
  
}
