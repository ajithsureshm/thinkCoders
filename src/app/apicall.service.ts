import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + ("738516f4d4377096393bcd2a858164971412d8bd69aa257642e48f001b90dbed"),
    }),
  };

  tableListing() {
    var tableListingAPI = 'https://gorest.co.in/public/v2/users/'
    return new Promise((resolve, reject) => {
      this.http.get(tableListingAPI)
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }

  getSpecificUserDetails(id: any) {
    var getSpecificUserDetailsAPI = `https://gorest.co.in/public/v2/users/${id}`
    return new Promise((resolve, reject) => {
      this.http.get(getSpecificUserDetailsAPI, this.httpOptions)
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }

  updateGetUser(id: any, email: any, name: any, gender: any, status: any) {
    var updateGetUserAPI = `https://gorest.co.in/public/v2/users/${id}`
    let data = {
      "id": id,
      "name": name,
      "email": email,
      "gender": gender,
      "status": status
    }
    console.log("data", data);

    return new Promise((resolve, reject) => {
      this.http.put(updateGetUserAPI, data, this.httpOptions)
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }

  deleteGetUser(id: any) {
    var deleteGetUserAPI = `https://gorest.co.in/public/v2/users/${id}`
    return new Promise((resolve, reject) => {
      this.http.delete(deleteGetUserAPI, this.httpOptions)
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }

  addUser(addemail: any, addname: any, addgender: any, addstatus: any) {
    var addUserAPI = 'https://gorest.co.in/public/v2/users'
    let data = {
      "name": addname,
      "email": addemail,
      "gender": addgender,
      "status": addstatus
    }

    console.log("data",data);
    
    return new Promise((resolve, reject) => {
      this.http.post(addUserAPI, data, this.httpOptions)
        .subscribe(
          (response) => {
            resolve(response)
          },
          (err) => {
            reject(err)
          }
        )
    })
  }
}
