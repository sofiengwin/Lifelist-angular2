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
var bucketlist_service_1 = require("./bucketlist.service");
var BucketlistComponent = (function () {
    function BucketlistComponent(bucketlistService) {
        this.bucketlistService = bucketlistService;
        this.mode = 'Observable';
        this.newItemForm = true;
        this.newBucketlistForm = true;
    }
    ;
    BucketlistComponent.prototype.ngOnInit = function () {
        this.getBucketlists();
    };
    ;
    BucketlistComponent.prototype.onSelect = function (bucketlist) {
        this.selectedBucketlist = bucketlist;
    };
    ;
    BucketlistComponent.prototype.getBucketlists = function () {
        var _this = this;
        this.bucketlistService.getBucketlists()
            .subscribe(function (bucketlists) { return _this.bucketlists = bucketlists; }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistComponent.prototype.addBucketlist = function (event, name) {
        var _this = this;
        event.preventDefault();
        if (!name) {
            return;
        }
        this.bucketlistService.addBucketlist(name)
            .subscribe(function (bucketlist) { return _this.bucketlists.push(bucketlist); }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistComponent.prototype.editBucketlist = function (event, name, bucketlist) {
        var _this = this;
        event.preventDefault();
        this.bucketlistService.editBucketlist(name, bucketlist.id)
            .subscribe(function (error) { return _this.errorMessage = error; });
        this.newBucketlistForm = true;
    };
    BucketlistComponent.prototype.deleteBucketlist = function (bucketlist) {
        var _this = this;
        var deletedBucketlistIndex = this.bucketlists.indexOf(bucketlist);
        this.bucketlistService.deleteBucketlist(bucketlist)
            .subscribe(function (error) { return _this.errorMessage = error; });
        this.bucketlists.splice(deletedBucketlistIndex, 1);
    };
    BucketlistComponent.prototype.showEditForm = function (bucketlist) {
        this.selectedBucketlis = bucketlist;
        this.newBucketlistForm = false;
    };
    //Items
    BucketlistComponent.prototype.addItem = function (event, name, bucketlist) {
        var _this = this;
        event.preventDefault();
        if (!name) {
            return;
        }
        this.bucketlistService.addItem(name, bucketlist)
            .subscribe(function (item) { return _this.selectedBucketlist.items.push(item); }, function (error) { return _this.errorMessage = error; });
    };
    BucketlistComponent.prototype.editBucketlistItem = function (event, name, bucketlist, item) {
        var _this = this;
        event.preventDefault();
        this.bucketlistService.editItem(name, bucketlist, item)
            .subscribe(function (error) { return _this.errorMessage = error; });
        this.newItemForm = true;
    };
    BucketlistComponent.prototype.deleteItem = function (item, bucketlist) {
        var _this = this;
        var deletedItemIndex = bucketlist.items.indexOf(item);
        this.bucketlistService.deleteItem(item, bucketlist)
            .subscribe(function (error) { return _this.errorMessage = error; });
        bucketlist.items.splice(deletedItemIndex, 1);
    };
    BucketlistComponent.prototype.selectItem = function (item) {
        this.selectedItem = item;
        this.newItemForm = false;
    };
    ;
    BucketlistComponent.prototype.item_count = function (bucketlist) {
        return bucketlist.items.length;
    };
    BucketlistComponent = __decorate([
        core_1.Component({
            selector: 'my-bucketlist',
            templateUrl: "app/bucketlist.component.html",
            providers: [bucketlist_service_1.BucketlistService]
        }), 
        __metadata('design:paramtypes', [bucketlist_service_1.BucketlistService])
    ], BucketlistComponent);
    return BucketlistComponent;
}());
exports.BucketlistComponent = BucketlistComponent;
//# sourceMappingURL=bucketlist.component.js.map