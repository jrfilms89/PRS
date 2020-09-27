import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Request } from '../request/request.class';

const baseurl = 'http://thejonathanmiller.com/api/requests';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

 
  constructor(private http: HttpClient) { }

  approved(request:Request): Observable<Request>{
    return this.http.put(`${baseurl}/approved`, request) as Observable<Request>;
  }
  rejected(request:Request): Observable<Request>{
    return this.http.put(`${baseurl}/rejected`, request) as Observable<Request>;
  }
  review(request:Request): Observable<Request>{
    return this.http.put(`${baseurl}/review`, request) as Observable<Request>;
  }
  reviewList(id:number): Observable<Request>{
    return this.http.get(`${baseurl}/review/${id}`) as Observable<Request>;
  }
  list(): Observable<Request[]>{
    return this.http.get(`${baseurl}`) as Observable<Request[]>;
  }
  detail(id:number): Observable<Request>{
    return this.http.get(`${baseurl}/${id}`) as Observable<Request>;
  }
  create(request:Request): Observable<Request>{
    return this.http.post(`${baseurl}`, request) as Observable<Request>;
  }
  edit(request:Request): Observable<Request>{
    return this.http.put(`${baseurl}/${request.id}`, request) as Observable<any>;
  }
  delete(id:number): Observable<Request>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Request>;
  }}