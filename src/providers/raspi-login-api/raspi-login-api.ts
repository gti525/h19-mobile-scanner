import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class RaspiLoginApiProvider {
  apiUrl = "LOCALHOST";
  private USER_INFO = "user_info"
  constructor(public http: HttpClient, private storage: Storage) {
    console.log("RaspiApiProvider Provider");
  }

  login(username,password) {
    return new Promise((resolve, reject) => {
      this.http
        .post(this.apiUrl + "/api-token", {
          "username": username,
          "password": password})
        .subscribe(
          data => {
            this.setUserInfo(data.json());
           }, 
          err => {
            reject(err.status);
          }
        );
    });
  }

  setUserInfo(info: JSON){
		this.storage.set(this.USER_INFO, info);
	}

	deleteUserInfo(){
		this.storage.set(this.USER_INFO, null);
	}

	getUserInfo(){
		return this.storage.get(this.USER_INFO);
	}
}
