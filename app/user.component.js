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
var router_1 = require('@angular/router');
var core_3 = require('angular2-cookie/core');
var register_service_1 = require("./register.service");
var UserComponent = (function () {
    function UserComponent(newUserService, _cookieService, router) {
        this.newUserService = newUserService;
        this._cookieService = _cookieService;
        this.router = router;
    }
    UserComponent.prototype.register = function (event, name, email, password, password_confirmation) {
        var _this = this;
        event.preventDefault();
        this.newUserService.new_user(name, email, password, password_confirmation).subscribe(function (result) {
            console.log(result);
            if (result) {
                _this._cookieService.putObject("auth", result);
                _this.router.navigate(['bucketlist']);
            }
        });
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: "my-user",
            templateUrl: "app/user.component.html",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, core_3.CookieService, register_service_1.NewUserService]
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [register_service_1.NewUserService, core_3.CookieService, router_1.Router])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map