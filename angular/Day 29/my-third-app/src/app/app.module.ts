import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { UserComponent } from './user/user.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, DemoComponent, HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
