import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  user : any | undefined = undefined;
  info : any | undefined = undefined;
  id = new FormControl('');
  age = new FormControl('');

  handleUpdate(){
    let id = this.id.value;
    let age = this.age.value;
    this._service.updateUser(id, age, this.user).subscribe((data) => {this.info=data;});
  }
}
