import { Component, OnInit } from '@angular/core';
import { Bucketlist } from './bucketlist';
import { Item } from "./item"
import { BucketlistService } from "./bucketlist.service";
import { ItemService } from "./item.service";



@Component({
  selector: 'my-bucketlist',
  templateUrl: "app/bucketlist.component.html",
  providers: [BucketlistService, ItemService]
})

export class BucketlistComponent implements OnInit {
  constructor(private bucketlistService: BucketlistService, private itemService: ItemService) {
    this.newItemForm = true;
    this.newBucketlistForm = true;
  };

  bucketlist: Bucketlist;
  item: Item;
  bucketlists: Bucketlist[];
  errorMessage: string;
  mode = 'Observable';
  newItemForm: boolean;
  newBucketlistForm: boolean;

  ngOnInit(){
    this.getBucketlists();
  };

  selectedBucketlist: Bucketlist;
  onSelect(bucketlist){
    this.selectedBucketlist = bucketlist
  };


 getBucketlists() {
   this.bucketlistService.getBucketlists()
                   .subscribe(
                     bucketlists => this.bucketlists = bucketlists,
                     error =>  this.errorMessage = <any>error
                   );
  }

  addBucketlist (event, name) {
    event.preventDefault()
    if (!name) { return; }
    this.bucketlistService.addBucketlist(name)
                     .subscribe(
                       bucketlist  => this.bucketlists.push(bucketlist),
                       error =>  this.errorMessage = <any>error);
  }

  editBucketlist(event, name, bucketlist){
    event.preventDefault();
    this.bucketlistService.editBucketlist(name, bucketlist.id)
                     .subscribe(
                       error =>  this.errorMessage = <any>error);
    this.newBucketlistForm = true;
  }

  deleteBucketlist(bucketlist){
    let deletedBucketlistIndex = this.bucketlists.indexOf(bucketlist)
    this.bucketlistService.deleteBucketlist(bucketlist)
                     .subscribe(
                       error =>  this.errorMessage = <any>error);
    this.bucketlists.splice(deletedBucketlistIndex, 1)
  }

  showEditForm(bucketlist){
    this.selectedBucketlist = bucketlist
    this.newBucketlistForm = false;

  }

  //Items

  addItem (event, name, bucketlist) {
    event.preventDefault()
    if (!name) { return; }
    this.itemService.addItem(name, bucketlist)
                     .subscribe(
                       item  => this.selectedBucketlist.items.push(item),
                       error =>  this.errorMessage = <any>error);
  }

  editBucketlistItem(event, name, bucketlist, item){
    event.preventDefault();
    this.bucketlistService.editItem(name, bucketlist, item)
    .subscribe(
      error =>  this.errorMessage = <any>error);
      this.newItemForm = true
  }

  deleteItem(item, bucketlist){
    let deletedItemIndex = bucketlist.items.indexOf(item)
    this.bucketlistService.deleteItem(item, bucketlist)
                     .subscribe(
                       error =>  this.errorMessage = <any>error);
    bucketlist.items.splice(deletedItemIndex, 1)
  }

  selectedItem: Item;
  selectItem(item){
    this.selectedItem = item
    this.newItemForm = false;
  };

  item_count(bucketlist){
    return bucketlist.items.length
  }
}
