import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class UserService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ){}

  setUsers_(data){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', 'my-auth-token');
    let params = new HttpParams();
    params.set('id', '1')
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data), {headers: headers, params: params})
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getUsers_(){
    return new Promise( resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(
        data => {
          resolve(data);
        }, err => {
          console.log(err);
        }
      );
    });
  }

  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
