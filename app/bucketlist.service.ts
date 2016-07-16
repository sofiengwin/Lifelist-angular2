import { Injectable } from '@angular/core';
import { BucketlistComponent } from './bucketlist.component';
import { BUCKETLISTS } from "./bucketlist-mocks"

@Injectable()
export class BucketlistService {
  getBucketlists(){
    return Promise.resolve(BUCKETLISTS);
  };
}
