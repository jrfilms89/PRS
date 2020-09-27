import { Component, OnInit } from '@angular/core';
import { Requestitem } from '../requestitem.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestitemService } from '../requestitem.service';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-requestitem-edit',
  templateUrl: './requestitem-edit.component.html',
  styleUrls: ['./requestitem-edit.component.css']
})
export class RequestitemEditComponent implements OnInit {

  pageTitle:string = "Request Item Edit";
  requestitem:Requestitem;
  showDelete:boolean = false;
  products:Product[];

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private reqItemService:RequestitemService,
    private productService:ProductService,
    private sys:SystemService) { }


    edit(id:number):void {
      this.reqItemService.edit(this.requestitem).subscribe(
        res =>{
          console.log(res);
          this.router.navigateByUrl(`/requests/lines/${id}`);
        },
        err =>{
          console.error(err);
        }
      )
    }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.reqItemService.detail(+id).subscribe(
      res => {this.requestitem = res as Requestitem;
      console.log(res);},
      err => {console.error(err)}
    )
    this.productService.list().subscribe(
      res => {this.products = res as Product[];
        console.log(res);},
      err => {console.error(err)}
    )
  }
}
