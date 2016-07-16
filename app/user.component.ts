import { Component } from "@angular/core";
import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { NewUserService } from "./register.service"

@Component({
  selector: "my-user",
  templateUrl: "app/user.component.html",
  providers: [HTTP_PROVIDERS, NewUserService]
})

@Injectable()
export class UserComponent {
  constructor(private newUserService: NewUserService) {}
    register(event, name, email, password, password_confirmation){
      event.preventDefault();
      this.newUserService.new_user(name, email, password, password_confirmation).subscribe((result) => {
        console.log(result)
       if (result) {
        //  this.router.navigate(['bucketlists']);
         window.location.href="http://localhost:3000/bucketlist"
       }
     });
    }
}
