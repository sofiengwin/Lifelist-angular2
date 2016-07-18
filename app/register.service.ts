// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import localStorage from 'localStorage';

@Injectable()
export class NewUserService {
  private loggedIn = false;

  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  new_user(name, email, password, password_confirmation) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        'https://lifelist-api.herokuapp.com/api/v1/users',
        JSON.stringify({ name, email, password, password_confirmation }),
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }
        return res;
      });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
