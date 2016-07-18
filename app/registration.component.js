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
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var core_3 = require('angular2-cookie/core');
var login_service_1 = require("./login.service");
// import { contentHeaders } from '../common/headers';
var UserFormComponent = (function () {
    function UserFormComponent(userService, _cookieService, router) {
        this.userService = userService;
        this._cookieService = _cookieService;
        this.router = router;
    }
    UserFormComponent.prototype.login = function (event, email, password) {
        var _this = this;
        event.preventDefault();
        this.userService.login(email, password).subscribe(function (result) {
            if (result) {
                console.log(result);
                _this._cookieService.putObject("auth", result);
                _this.router.navigate(['bucketlist']);
            }
        });
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'hero-form',
            templateUrl: 'app/register.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, core_3.CookieService, login_service_1.UserService]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [login_service_1.UserService, core_3.CookieService, router_1.Router])
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=registration.component.js.map