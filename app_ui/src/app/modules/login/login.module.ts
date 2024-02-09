import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    StyleClassModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
