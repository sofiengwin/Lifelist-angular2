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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var core_2 = require('angular2-cookie/core');
var BucketlistService = (function () {
    function BucketlistService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.baseApi = 'https://lifelist-api.herokuapp.com/api/v1/bucketlists/';
        this.token = JSON.parse(this.getCookie("auth")).auth_token;
    }
    // getBucketlists(){
    //   return Promise.resolve(BUCKETLISTS);
    // };
    BucketlistService.prototype.getBucketlists = function () {
        var _this = this;
        console.log(this.token);
        var cookie = JSON.parse(this.getCookie("auth"));
        var headers = new http_1.Headers();
        //  headers.append('Accept', 'application/json');
        headers.append('Authorization', (this.token));
        // let body = JSON.stringify({name: "test"})
        // let options = new RequestOptions({ headers: headers });
        return this.http.get(this.baseApi, { headers: headers })
            .map(function (data) {
            return _this.extractData(data);
        })
            .catch(this.handleError);
    };
    BucketlistService.prototype.addBucketlist = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', (this.token));
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseApi, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BucketlistService.prototype.editBucketlist = function (name, id) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', (this.token));
        var options = new http_1.RequestOptions({ headers: headers });
        var updatePath = this.baseApi + "/" + id;
        // console.log(updatePath)
        return this.http.put(updatePath, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BucketlistService.prototype.deleteBucketlist = function (bucketlist) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', (this.token));
        var options = new http_1.RequestOptions({ headers: headers });
        var bucketlistPath = this.baseApi + "/" + bucketlist.id;
        // console.log(updatePath)
        return this.http.delete(bucketlistPath, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    // Items
    BucketlistService.prototype.addItem = function (name, bucketlist) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', (this.token));
        var options = new http_1.RequestOptions({ headers: headers });
        var itemPath = this.baseApi + "/" + bucketlist.id + "/items";
        console.log(itemPath);
        return this.http.post(itemPath, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BucketlistService.prototype.editItem = function (name, bucketlist, item) {
        var body = JSON.stringify({ name: name });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', (this.token));
        var options = new http_1.RequestOptions({ headers: headers });
        var itemPath = this.baseApi + "/" + bucketlist.id + "/items" + "/" + item.id;
        console.log(itemPath);
        return this.http.put(itemPath, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BucketlistService.prototype.deleteItem = function (item, bucketlist) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        headers.append('Authorization', (this.token));
        var options = new http_1.RequestOptions({ headers: headers });
        var itemPath = this.baseApi + "/" + bucketlist.id + "/items/" + item.id;
        return this.http.delete(itemPath, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BucketlistService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BucketlistService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    BucketlistService.prototype.getCookie = function (key) {
        return this._cookieService.get(key);
    };
    BucketlistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, core_2.CookieService])
    ], BucketlistService);
    return BucketlistService;
}());
exports.BucketlistService = BucketlistService;
//# sourceMappingURL=bucketlist.service.js.map