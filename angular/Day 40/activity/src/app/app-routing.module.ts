import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthenticGuard } from './authentic.guard';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "home/:name/:pass", component : HomeComponent, canActivate : [AuthenticGuard], children : [
    {path : "", component : AddComponent},
    {path : "add", component : AddComponent},
    {path : "details", component : DetailsComponent},
    {path : "delete", component : DeleteComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
