import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private logoutservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.logoutservice.logOut();
    this.router.navigate(['/login']);
  }

}
