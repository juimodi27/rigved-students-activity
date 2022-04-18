import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileStoreComponent } from './profile-store/profile-store.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

let route : Routes = [
  {path: "", component : ProfileStoreComponent},
  {path: "store", component : ProfileStoreComponent},
  {path: "usersList", component : ProfileListComponent},
  {path: "delete", component: ProfileDeleteComponent},
  {path: "update", component: ProfileUpdateComponent},
  {path: "success/:uid", component:RegisterSuccessComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfileListComponent,
    ProfileStoreComponent,
    ProfileDeleteComponent,
    ProfileUpdateComponent,
    RegisterSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
