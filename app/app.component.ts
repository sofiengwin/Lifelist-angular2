import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { Bucketlist } from './bucketlist';
import { BucketlistComponent } from './bucketlist.component';
import { BucketlistService } from "./bucketlist.service";
import { Session } from "./session"
import { UserService } from "./login.service"




@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, BucketlistService, UserService]
})
export class AppComponent {
  auth_token: Session;
  get_token(){
    return isLoggedIn()
    // console.log(LocalStorage.auth_token);
    // return this.auth_token = localStorage.auth_token;
  }
}
