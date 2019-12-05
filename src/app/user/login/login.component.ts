import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  loginDetails = this.fb.group({

    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(5)]]
  })


  onSubmit(){
    console.log(this.loginDetails.value)
  }

}
