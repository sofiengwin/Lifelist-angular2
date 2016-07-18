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
require('./rxjs-operators');
var http_1 = require('@angular/http');
var core_2 = require('angular2-cookie/core');
var router_1 = require('@angular/router');
var login_service_1 = require("./login.service");
var AppComponent = (function () {
    function AppComponent(userService, _cookieService, router) {
        this.userService = userService;
        this._cookieService = _cookieService;
        this.router = router;
    }
    AppComponent.prototype.isloggedIn = function () {
        var cookie = this.getCookie("auth");
        if (cookie) {
            return true;
        }
    };
    AppComponent.prototype.logout = function () {
        this._cookieService.remove("auth");
        this.router.navigate(['new']);
    };
    AppComponent.prototype.current_user = function () {
        var cookie = this.getCookie("auth");
        var valid = JSON.parse(cookie);
        return valid.user.name;
    };
    AppComponent.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: "app/app.component.html",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, core_2.CookieService, login_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [login_service_1.UserService, core_2.CookieService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map