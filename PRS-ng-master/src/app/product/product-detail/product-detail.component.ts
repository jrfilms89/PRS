import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { Product } from '../product.class'
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string = "Product Detail";
  product:Product = null;
  showDelete:boolean = false;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private proService:ProductService,
    private sys:SystemService) { }

    edit():void {
      this.proService.edit(this.product).subscribe(
        res =>{
          console.log(res);
          this.router.navigateByUrl("/products/list");
        },
        err =>{
          console.error(err);
        }
      )
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
      res => {this.product = res as Product;},
      err => {console.error(err)}
    )
  }
}
