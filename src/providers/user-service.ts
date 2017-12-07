import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ){}

  getUsers(){
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
