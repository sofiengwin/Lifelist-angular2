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
// import { BUCKETLISTS } frosm "./bucketlist-mocks"
var bucketlist_service_1 = require("./bucketlist.service");
var BucketlistComponent = (function () {
    function BucketlistComponent(bucketlistService) {
        this.bucketlistService = bucketlistService;
    }
    BucketlistComponent.prototype.ngOnInit = function () {
        // this.bucketlists = BUCKETLISTS;
        this.getBucketlists();
    };
    ;
    BucketlistComponent.prototype.onSelect = function (bucketlist) {
        this.selectedBucketlist = bucketlist;
    };
    ;
    ;
    BucketlistComponent.prototype.getBucketlists = function () {
        var _this = this;
        this.bucketlistService.getBucketlists().then(function (bucketlists) { return _this.bucketlists = bucketlists; });
    };
    ;
    BucketlistComponent = __decorate([
        core_1.Component({
            selector: 'my-bucketlist',
            templateUrl: "app/bucketlist.component.html"
        }), 
        __metadata('design:paramtypes', [bucketlist_service_1.BucketlistService])
    ], BucketlistComponent);
    return BucketlistComponent;
}());
exports.BucketlistComponent = BucketlistComponent;
//# sourceMappingURL=bucketlist.component.js.map