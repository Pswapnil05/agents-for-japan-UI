import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class RegisteredUser {
  constructor(
    // public id: number,
  public username: string,
  public password: string,
  ) {}
}

export class RegisterUser {
  constructor(
    // public id: number,
  public username: string,
  public password: string,
  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  newRegistration(registerUser) {
    return this.http.post<RegisterUser>('http://localhost:9001/agentsforjapan/register', registerUser);
    
  }

  /**after successful authentication save username & token in sessionstorage.
   * this token will be used in Intercepter to add token in Authorization header
   */

  authenticate(registeredUser) {
    return this.http.post<any>('http://localhost:9001/agentsforjapan/login', registeredUser).pipe(
      map(
        data => {
          sessionStorage.setItem('username', registeredUser.username);
          console.log(registeredUser.username)
          let tokenStr = "Bearer " + data.token;
          sessionStorage.setItem('token', tokenStr);
          return data;   
        }
      )
    );
  }
  
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    // console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
