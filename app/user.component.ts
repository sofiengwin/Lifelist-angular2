import { Component } from "@angular/core";
import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import {CookieService} from 'angular2-cookie/core';
import { NewUserService } from "./register.service"

@Component({
  selector: "my-user",
  templateUrl: "app/user.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, CookieService, NewUserService]
})

@Injectable()
export class UserComponent {
  constructor(private newUserService: NewUserService, private _cookieService:CookieService, public router: Router) {}
    register(event, name, email, password, password_confirmation){
      event.preventDefault();
      this.newUserService.new_user(name, email, password, password_confirmation).subscribe((result) => {
        console.log(result)
       if (result) {
         this._cookieService.putObject("auth", result);
         this.router.navigate(['bucketlist']);       }
     });
    }
}
