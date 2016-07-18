import { Component } from '@angular/core';
import './rxjs-operators';
import { HTTP_PROVIDERS } from '@angular/http';
import {CookieService} from 'angular2-cookie/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Bucketlist } from './bucketlist';
// import { BucketlistComponent } from './bucketlist.component';
// import { BucketlistService } from "./bucketlist.service";
import { Session } from "./session"
import { UserService } from "./login.service"





@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, CookieService, UserService]
})

export class AppComponent {
  constructor(private userService: UserService, private _cookieService:CookieService, public router: Router) {}
  auth_token: Session;
  isloggedIn(){
    let cookie = this.getCookie("auth")

    if(cookie){
      return true
    }
  }

  logout(){
    this._cookieService.remove("auth");
    this.router.navigate(['new']);
  }

  current_user(){
    let cookie = this.getCookie("auth");
    let valid = JSON.parse(cookie)
    return valid.user.name
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }
}
