import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product.class';

const baseurl = 'http://thejonathanmiller.com/api/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  constructor(private http: HttpClient) { }

  list(): Observable<Product[]>{
    return this.http.get(`${baseurl}`) as Observable<Product[]>;
  }
  detail(id:number): Observable<Product>{
    return this.http.get(`${baseurl}/${id}`) as Observable<Product>;
  }
  create(product:Product): Observable<Product>{
    return this.http.post(`${baseurl}`, product) as Observable<Product>;
  }
  edit(product:Product): Observable<Product>{
    return this.http.put(`${baseurl}/${product.id}`, product) as Observable<any>;
  }
  delete(id:number): Observable<Product>{
    return this.http.delete(`${baseurl}/${id}`) as Observable<Product>;
  }}