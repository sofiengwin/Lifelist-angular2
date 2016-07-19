import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import { BUCKETLISTS } from "./bucketlist-mocks"
import { Bucketlist } from './bucketlist';
import { Observable }     from 'rxjs/Observable';
import {CookieService} from 'angular2-cookie/core';



@Injectable()
export class BucketlistService {
  constructor (private http: Http, private _cookieService:CookieService) {}

  private baseApi = 'https://lifelist-api.herokuapp.com/api/v1/bucketlists/';
  private token = JSON.parse(this.getCookie("auth")).auth_token

  getBucketlists (): Observable<Bucketlist[]> {
    console.log(this.token)
    let cookie = JSON.parse(this.getCookie("auth"))
    let headers = new Headers();
  //  headers.append('Accept', 'application/json');
    headers.append('Authorization', (this.token));
    // let body = JSON.stringify({name: "test"})
    // let options = new RequestOptions({ headers: headers });
  return this.http.get(this.baseApi, {headers: headers})
                  .map((data) => {
                  return this.extractData(data);
                })
                  .catch(this.handleError);
}

addBucketlist (name: string): Observable<Bucketlist> {
  let body = JSON.stringify({ name });
  let headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Authorization', (this.token));
  let options = new RequestOptions({ headers: headers });

  return this.http.post(this.baseApi, body, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

editBucketlist (name: string, id): Observable<Bucketlist> {
  let body = JSON.stringify({ name });
  let headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Authorization', (this.token));
  let options = new RequestOptions({ headers: headers });
  let updatePath = this.baseApi + "/" + id
  // console.log(updatePath)
  return this.http.put(updatePath, body, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

deleteBucketlist (bucketlist): Observable<Bucketlist> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  headers.append('Authorization', (this.token));
  let options = new RequestOptions({ headers: headers });
  let bucketlistPath = this.baseApi + "/" + bucketlist.id
  // console.log(updatePath)
  return this.http.delete(bucketlistPath, options)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  // Items
  addItem (name: string, bucketlist): Observable<Bucketlist> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', (this.token));
    let options = new RequestOptions({ headers: headers });
    let itemPath = this.baseApi + "/" + bucketlist.id + "/items"
    console.log(itemPath)

    return this.http.post(itemPath, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

  editItem (name: string, bucketlist, item): Observable<Bucketlist> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', (this.token));
    let options = new RequestOptions({ headers: headers });
    let itemPath = this.baseApi + "/" + bucketlist.id + "/items" + "/" + item.id
    console.log(itemPath)

    return this.http.put(itemPath, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    deleteItem(item, bucketlist): Observable<Bucketlist> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      headers.append('Authorization', (this.token));
      let options = new RequestOptions({ headers: headers });
      let itemPath = this.baseApi + "/" + bucketlist.id + "/items/" + item.id
      return this.http.delete(itemPath, options)
                      .map(this.extractData)
                      .catch(this.handleError);
      }

    private extractData(res: Response) {
        let body = res.json();
        return body || {}
      }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private getCookie(key: string){
    return this._cookieService.get(key);
  }
}
