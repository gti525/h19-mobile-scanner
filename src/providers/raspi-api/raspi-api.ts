import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the RaspiApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RaspiApiProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    console.log('Hello RaspiApiProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/users', JSON.stringify(data))
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}

}
