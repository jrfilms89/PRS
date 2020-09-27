import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Requestitem } from '../requestitem/requestitem.class';

const baseurl = 'http://thejonathanmiller.com/api/requestlines';

@Injectable({
  providedIn: 'root'
})
export class RequestitemService {

  constructor(private http: HttpClient) { }

  list(): Observable<Requestitem[]>{
    return this.http.get(`${baseurl}`) as Observable<Requestitem[]>;
  }
  detail(id:number): Observable<Requestitem>{
    return this.http.get(`${baseurl}/${id}`) as Observable<Requestitem>;
  }
  create(requestitem:Requestitem): Observable<Requestitem>{
    return this.http.post(`${baseurl}`, requestitem) as Observable<Requestitem>;
  }
  edit(requestitem:Requestitem): Observable<Requestitem>{
    return this.http.put(`${baseurl}/${requestitem.id}`, requestitem) as Observable<any>;
  }
  delete(id:number): Observable<Requestitem>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Requestitem>;
  }}