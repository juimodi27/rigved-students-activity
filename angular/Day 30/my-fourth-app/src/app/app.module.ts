import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom-pipe';
import { FirstComponent } from './first/first.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';
import { JsObjectComponent } from './js-object/js-object.component';
import { UserTableComponent } from './user-table/user-table.component';
import { CustomTitle } from './custom-title';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PipeDemoComponent,
    CustomPipe,
    StructuralDemoComponent,
    JsObjectComponent,
    UserTableComponent,
    CustomTitle
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
