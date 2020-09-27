import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { SystemService } from '../../system.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle:string = "Product List | ";
  sortCol:string = "id"
  sortAsc:boolean = true;

  sort(column:string){
    if(column == this.sortCol){
      this.sortAsc = !this.sortAsc;
      return;
    }
    this.sortAsc = true;
    this.sortCol = column;
  }

  searchCriteria:string = '';

  constructor(
    private sys:SystemService,
    private productservice: ProductService
  ) { }

    page = 4;
    pageSize = 25;
  
  products:Product[];

  ngOnInit(): void {
    this.sys.chkLogin();
    this.productservice.list().subscribe(
      res => {
        for(let p of res){
          p.vendorName = p.vendor.name;
        }
      this.products = res as Product[]},
      err =>{console.error(err)}
    );
  }
}
