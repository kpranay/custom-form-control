import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestdecimalPipe } from './testdecimal.pipe';
import { DecimalInputComponent } from './decimal-input/decimal-input.component';

@NgModule({
  declarations: [
    AppComponent,
    FormArrayComponent,
    TestdecimalPipe,
    DecimalInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
