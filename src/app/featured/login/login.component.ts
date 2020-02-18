import { Component, OnInit } from '@angular/core';
import { AuthenticationService, RegisteredUser } from 'src/app/shared/services/authentication.service';

import { Router } from '@angular/router';
import { error } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

 
  registeredUser : RegisteredUser = new RegisteredUser("","");
  invalidLogin = false;
  

  constructor(private loginservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.registeredUser)
      .subscribe( res => {
        console.log(res); // token
        this.router.navigate(['/agency']);
        this.invalidLogin = false;
      },
      error => {this.invalidLogin = true;}
      )
    
  }



}
