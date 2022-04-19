import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-find-oneuser',
  templateUrl: './find-oneuser.component.html',
  styleUrls: ['./find-oneuser.component.css']
})
export class FindOneuserComponent implements OnInit {
  user : any[] | undefined = undefined;
  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  _id = new FormControl('');
  handleClick() : void {
    this._service.getUserId(this._id.value).subscribe((data) => {this.user = data;});
  }
}
