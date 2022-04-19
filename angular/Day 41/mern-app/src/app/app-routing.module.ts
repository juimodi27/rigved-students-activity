import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FindAllusersComponent } from './find-allusers/find-allusers.component';
import { FindOneuserComponent } from './find-oneuser/find-oneuser.component';
import { StoreUserComponent } from './store-user/store-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path : "", component : StoreUserComponent},
  {path : "store", component : StoreUserComponent},
  {path : "findAll", component : FindAllusersComponent},
  {path : "findUser", component : FindOneuserComponent},
  {path : "delete", component : DeleteUserComponent},
  {path : "update", component : UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
