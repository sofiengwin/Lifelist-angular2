/**
 * angular2-cookie - Implementation of Angular 1.x $cookies service to Angular 2
 * @version v1.2.2
 * @link https://github.com/salemdar/angular2-cookie#readme
 * @license MIT
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var services_1 = require('./services');
__export(require('./services'));
exports.ANGULAR2_COOKIE_PROVIDERS = [core_1.provide(services_1.CookieOptions, { useClass: services_1.BaseCookieOptions })];

//# sourceMappingURL=core.js.map
