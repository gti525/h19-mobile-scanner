import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class RaspiApiProvider {
  private token;
  apiUrl = "http://192.168.7.1";
  constructor(public http: HttpClient) {
    console.log("RaspiApiProvider Provider");
  }

  addTicket(data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + "/billetScan", JSON.stringify(data), {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${this.token}`
        },
          observe: "response"
        })
        .subscribe(
          res => {
            if (res.status == 200 || res.status == 400 || res.status == 409) {
              resolve(res.status);
            }
            if (res.status == 500) {
              reject(res.status);
            }
          },
          err => {
            reject(err.status);
          }
        );
    });
  }

  login(user,password) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + "/token-auth/", {
          "username": user,
          "password": password }, {
          headers: {'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': this.apiUrl,
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers" : "Content-Type, Accept, X-Requested-With, remember-me" },
          observe: "response"
        })
        .subscribe(
          data => {
            alert("je rentre dans subscibe");
            if (data.status == 200) {
              this.token = data['_body'];
            }
            resolve(data.status);
            
           }, 
          err => {
            alert("je rentre dans erreur "+ err.status+" "+err.response);
            reject(err.status);
          }
        );
    });
  }

  
}
