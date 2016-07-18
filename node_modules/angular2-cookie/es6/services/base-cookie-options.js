/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.2
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { isPresent } from '@angular/common/src/facade/lang';
import { Injectable } from '@angular/core';
import { getDOM } from '@angular/platform-browser/src/dom/dom_adapter';
/** @private */
export class CookieOptions {
    constructor({ path, domain, expires, secure }) {
        this.path = isPresent(path) ? path : null;
        this.domain = isPresent(domain) ? domain : null;
        this.expires = isPresent(expires) ? expires : null;
        this.secure = isPresent(secure) ? secure : false;
    }
    merge(options) {
        return new CookieOptions({
            path: isPresent(options) && isPresent(options.path) ? options.path : this.path,
            domain: isPresent(options) && isPresent(options.domain) ? options.domain : this.domain,
            expires: isPresent(options) && isPresent(options.expires) ? options.expires : this.expires,
            secure: isPresent(options) && isPresent(options.secure) ? options.secure : this.secure,
        });
    }
}
/** @private */
export let BaseCookieOptions = class BaseCookieOptions extends CookieOptions {
    constructor() {
        super({ path: getDOM().getBaseHref() });
    }
};
BaseCookieOptions = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [])
], BaseCookieOptions);

//# sourceMappingURL=base-cookie-options.js.map
