import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { SystemService } from 'src/app/system.service';
import { VendorSearchPipe } from 'src/app/pipes/vendor-search.pipe';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  pageTitle:string = "Product Edit";
  product:Product = null;
  vendors:Vendor[];
  showDelete:boolean = false;


  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private proService:ProductService,
    private sys:SystemService,
    private vendorService:VendorService) { }

    edit():void {
      this.product.vendorId = +this.product.vendorId;
      this.proService.edit(this.product).subscribe(
        res =>{
          console.log("Result", res);
          this.router.navigateByUrl("/products/list");
        },
        err =>{
          console.error(err);
        }
      );
    }

    verify():void {this.showDelete = !this.showDelete}
    delete():void {
      this.proService.delete(this.product.id).subscribe(
        res =>{
          console.log(res);
          this.router.navigateByUrl("/products/list");
        },
        err => {
          console.error(err);
        }
      )
    }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.proService.detail(+id).subscribe(
      res => {console.log("Product", res);
              this.product = res as Product;},
      err => {console.error(err)}
    );
    this.vendorService.list().subscribe(
      res =>{console.log(res);
      this.vendors = res as Vendor[];}
    )
  }

}
