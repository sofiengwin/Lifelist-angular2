import { Component, OnInit } from '@angular/core';
import { Bucketlist } from './bucketlist';
// import { BUCKETLISTS } frosm "./bucketlist-mocks"
import { BucketlistService } from "./bucketlist.service";



@Component({
  selector: 'my-bucketlist',
  templateUrl: "app/bucketlist.component.html"
})

export class BucketlistComponent implements OnInit {
  bucketlist: Bucketlist;
  bucketlists: Bucketlist[];
  ngOnInit(){
    // this.bucketlists = BUCKETLISTS;
    this.getBucketlists();
  };

  selectedBucketlist: Bucketlist;
  onSelect(bucketlist){
    this.selectedBucketlist = bucketlist
  };

  constructor(private bucketlistService: BucketlistService) { };

  getBucketlists() {
   this.bucketlistService.getBucketlists().then(bucketlists => this.bucketlists = bucketlists);
 };
}
