import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, RegisterUser } from 'src/app/shared/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerUser : RegisterUser = new RegisterUser("","");

  constructor(private registerService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    this.registerService.newRegistration(this.registerUser)
    .subscribe( data => {
      this.router.navigate(['/login']);
      alert("user " + data.username + " registered successfully");
      console.log(data);
    });
      

  }

}
