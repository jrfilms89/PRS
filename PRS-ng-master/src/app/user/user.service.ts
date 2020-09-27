import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.class';

const baseurl = "http://thejonathanmiller.com/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  usernameChk(username:string): Observable<User>{
    return this.http.get(`${baseurl}/${username}`) as Observable<User>;
  }
  login(username:string, password:string): Observable<User>{
    return this.http.get(`${baseurl}/${username}/${password}`) as Observable<User>;
  }
  list(): Observable<User[]>{
    return this.http.get(`${baseurl}`) as Observable<User[]>;
  }
  detail(id:number): Observable<User>{
    return this.http.get(`${baseurl}/${id}`) as Observable<User>;
  }
  create(user:User): Observable<User>{
    return this.http.post(`${baseurl}`, user) as Observable<User>;
  }
  edit(user:User): Observable<User>{
    return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
  }
  delete(id:number): Observable<User>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<User>;
  }
}
