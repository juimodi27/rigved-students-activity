import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  user : any[] | undefined = undefined;
  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  _id = new FormControl('');
  handleDelete(id : number) {
    this._service.deleteUser(this._id).subscribe((data) => {this.user = data;});
  }
}
