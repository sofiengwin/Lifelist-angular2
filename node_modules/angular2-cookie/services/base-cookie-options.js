/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.2
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var lang_1 = require('@angular/common/src/facade/lang');
var core_1 = require('@angular/core');
var dom_adapter_1 = require('@angular/platform-browser/src/dom/dom_adapter');
/** @private */
var CookieOptions = (function () {
    function CookieOptions(_a) {
        var path = _a.path, domain = _a.domain, expires = _a.expires, secure = _a.secure;
        this.path = lang_1.isPresent(path) ? path : null;
        this.domain = lang_1.isPresent(domain) ? domain : null;
        this.expires = lang_1.isPresent(expires) ? expires : null;
        this.secure = lang_1.isPresent(secure) ? secure : false;
    }
    CookieOptions.prototype.merge = function (options) {
        return new CookieOptions({
            path: lang_1.isPresent(options) && lang_1.isPresent(options.path) ? options.path : this.path,
            domain: lang_1.isPresent(options) && lang_1.isPresent(options.domain) ? options.domain : this.domain,
            expires: lang_1.isPresent(options) && lang_1.isPresent(options.expires) ? options.expires : this.expires,
            secure: lang_1.isPresent(options) && lang_1.isPresent(options.secure) ? options.secure : this.secure,
        });
    };
    return CookieOptions;
}());
exports.CookieOptions = CookieOptions;
/** @private */
var BaseCookieOptions = (function (_super) {
    __extends(BaseCookieOptions, _super);
    function BaseCookieOptions() {
        _super.call(this, { path: dom_adapter_1.getDOM().getBaseHref() });
    }
    BaseCookieOptions = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BaseCookieOptions);
    return BaseCookieOptions;
}(CookieOptions));
exports.BaseCookieOptions = BaseCookieOptions;

//# sourceMappingURL=base-cookie-options.js.map
