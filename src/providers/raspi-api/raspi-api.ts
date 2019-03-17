import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class RaspiApiProvider {
  apiUrl = "http://virtserver.swaggerhub.com/raspi7/raspi/1.0.0";
  constructor(public http: HttpClient) {
    console.log("RaspiApiProvider Provider");
  }

  addTicket(data) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + "/billetScan", JSON.stringify(data), {
          headers: {},
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
}
