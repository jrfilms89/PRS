import { Component, OnInit } from '@angular/core';
import { Requestitem } from '../requestitem.class';
import { Product } from '../../product/product.class';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestitemService } from '../requestitem.service';
import { ProductService } from '../../product/product.service';
import { RequestService } from '../../request/request.service';
import { Request } from '../../request/request.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-requestitem-create',
  templateUrl: './requestitem-create.component.html',
  styleUrls: ['./requestitem-create.component.css']
})
export class RequestitemCreateComponent implements OnInit {

  pageTitle:string = "Request Item";
  requestId: number = 0;
  productId: number = 0;
  requestitem: Requestitem = new Requestitem();
  products: Product[];
  sortCol: string = "name";
  sortAsc: boolean = true;
  id:number = 0;
  request:Request;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reqItemService: RequestitemService,
    private productService: ProductService,
    private reqService: RequestService,
    private sys:SystemService
  ) { }

  save(): void {
    this.requestitem.productId = +this.requestitem.productId;
    this.requestitem.requestId = +this.id;
    this.reqItemService.create(this.requestitem).subscribe(
      res => {
        console.log("Requestitem create successful!", res);
        this.router.navigateByUrl(`/requests/lines/${this.id}`);
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.id = this.route.snapshot.params.id;
    this.productService.list().subscribe(
      res => { 
        console.log(res);
        this.products = res as Product[]; 
      },
      err => { console.error(err) }
    );
  }
}