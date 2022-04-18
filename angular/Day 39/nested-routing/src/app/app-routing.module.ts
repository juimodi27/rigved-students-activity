import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentComponent } from './department/department.component';
import { LibraryComponent } from './library/library.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "success/:name", component : SuccessComponent, children : [
    {path : "", component : DashboardComponent},
    {path : "dashboard/:name", component : DashboardComponent, children : [
      {path :"", component : AboutComponent},
      {path : "about", component : AboutComponent},
      {path : "department", component : DepartmentComponent},
      {path : "library", component : LibraryComponent},
    ]},
    {path : "search", component : SearchComponent},
    {path : "list", component : ListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
