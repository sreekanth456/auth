import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import{ ReactiveFormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 


import {MatButtonModule} from '@angular/material/button'; 

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  exports:[
    LoginComponent,
    SignUpComponent
  ]
})
export class UserModule { }
