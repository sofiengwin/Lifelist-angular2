import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Headers } from '@angular/http';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { UserService } from "./login.service"

// import { contentHeaders } from '../common/headers';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/register.component.html',
  providers: [HTTP_PROVIDERS, UserService]
})

@Injectable()
export class UserFormComponent {
  constructor(private userService: UserService) {}
    login(event, email, password){
      event.preventDefault();
      this.userService.login(email, password).subscribe((result) => {
        console.log(result)
       if (result) {
        //  this.router.navigate(['bucketlists']);
         window.location.href="http://localhost:3000/bucketlist"
       }
     });
    }
}
