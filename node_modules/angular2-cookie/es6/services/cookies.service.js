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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Json, isBlank, isPresent, isString } from '@angular/common/src/facade/lang';
import { Injectable, Optional } from '@angular/core';
import { CookieOptions } from './base-cookie-options';
export let CookieService = class CookieService {
    constructor(_defaultOptions) {
        this._defaultOptions = _defaultOptions;
    }
    /**
     * @name cookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    get(key) { return this._cookieReader()[key]; }
    /**
     * @name cookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    getObject(key) {
        let value = this.get(key);
        return value ? Json.parse(value) : value;
    }
    /**
     * @name cookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    getAll() { return this._cookieReader(); }
    /**
     * @name cookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    put(key, value, options) {
        this._cookieWriter()(key, value, options);
    }
    /**
     * @name cookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    putObject(key, value, options) {
        this.put(key, Json.stringify(value), options);
    }
    /**
     * @name cookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    remove(key, options) {
        this._cookieWriter()(key, undefined, options);
    }
    /**
     * @name cookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    removeAll() {
        let cookies = this.getAll();
        Object.keys(cookies).forEach(key => { this.remove(key); });
    }
    _cookieReader() {
        let rawDocument = document;
        let lastCookies = {};
        let lastCookieString = '';
        let that = this;
        let cookieArray, cookie, i, index, name;
        let currentCookieString = rawDocument.cookie || '';
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};
            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {
                    name = that._safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (isBlank(lastCookies[name])) {
                        lastCookies[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    }
    _cookieWriter() {
        let that = this;
        var rawDocument = document;
        return function (name, value, options) {
            rawDocument.cookie = that._buildCookieString(name, value, options);
        };
    }
    _safeDecodeURIComponent(str) {
        try {
            return decodeURIComponent(str);
        }
        catch (e) {
            return str;
        }
    }
    _buildCookieString(name, value, options) {
        var cookiePath = '/';
        var path, expires;
        var defaultOpts = this._defaultOptions || new CookieOptions({ path: cookiePath });
        var opts = this._mergeOptions(defaultOpts, options);
        expires = opts.expires;
        if (isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (isString(expires)) {
            expires = new Date(expires);
        }
        var str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';
        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        var cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log(`Cookie \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} > 4096 bytes)!`);
        }
        return str;
    }
    _mergeOptions(defaultOpts, providedOpts) {
        let newOpts = defaultOpts;
        if (isPresent(providedOpts)) {
            return newOpts.merge(new CookieOptions(providedOpts));
        }
        return newOpts;
    }
};
CookieService = __decorate([
    Injectable(),
    __param(0, Optional()), 
    __metadata('design:paramtypes', [CookieOptions])
], CookieService);

//# sourceMappingURL=cookies.service.js.map
