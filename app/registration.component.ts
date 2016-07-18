import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Headers } from '@angular/http';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import { UserService } from "./login.service"

// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/register.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, CookieService, UserService]
})

@Injectable()
export class UserFormComponent {
  constructor(private userService: UserService, private _cookieService:CookieService, public router: Router) {}
    login(event, email, password){
      event.preventDefault();
      this.userService.login(email, password).subscribe((result) => {
       if (result) {
         console.log(result)
        this._cookieService.putObject("auth", result);
        this.router.navigate(['bucketlist']);
       }
     });
    }
}
