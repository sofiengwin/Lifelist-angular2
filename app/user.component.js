"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var register_service_1 = require("./register.service");
var UserComponent = (function () {
    function UserComponent(newUserService) {
        this.newUserService = newUserService;
    }
    UserComponent.prototype.register = function (event, name, email, password, password_confirmation) {
        event.preventDefault();
        this.newUserService.new_user(name, email, password, password_confirmation).subscribe(function (result) {
            console.log(result);
            if (result) {
                //  this.router.navigate(['bucketlists']);
                window.location.href = "http://localhost:3000/bucketlist";
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: "my-user",
            templateUrl: "app/user.component.html",
            providers: [http_1.HTTP_PROVIDERS, register_service_1.NewUserService]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [register_service_1.NewUserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map