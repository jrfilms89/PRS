import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Vendor } from '../../vendor/vendor.class';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle:string = "Product Create";
  sortCol:string = 'name';
  sortAsc:boolean = true;
  searchCriteria:string = '';

  product:Product = new Product();
  vendors:Vendor[] = [];

  constructor(
    private router:Router,
    private productService:ProductService,
    private vendorService:VendorService,
    private sys:SystemService) { }

  save():void {
    this.product.price = +this.product.price;
    this.product.vendorId = +this.product.vendorId;
    this.productService.create(this.product).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/products/list");
      },
      err =>{
        console.error(err);
      }
    )
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.vendorService.list().subscribe(
      res => {
        console.log(res);
        this.vendors = res;
      },
      err =>{
        console.error(err);
      }
    )
  }

}
