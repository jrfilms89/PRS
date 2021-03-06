import { Injectable } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseurl = "http://thejonathanmiller.com/api/vendors";
@Injectable({
  providedIn: 'root'
})
export class VendorService {


  constructor(private http: HttpClient) { }

  list(): Observable<Vendor[]>{
    return this.http.get(`${baseurl}`) as Observable<Vendor[]>;
  }
  detail(id:number): Observable<Vendor>{
    return this.http.get(`${baseurl}/${id}`) as Observable<Vendor>;
  }
  create(vendor:Vendor): Observable<Vendor>{
    return this.http.post(`${baseurl}`, vendor) as Observable<Vendor>;
  }
  edit(vendor:Vendor): Observable<Vendor>{
    return this.http.put(`${baseurl}/${vendor.id}`, vendor) as Observable<any>;
  }
  delete(id:number): Observable<Vendor>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Vendor>;
  }}
