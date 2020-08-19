import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestdecimalPipe } from './testdecimal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    TestdecimalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
