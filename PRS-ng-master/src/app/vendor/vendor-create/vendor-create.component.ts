import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { Router } from '@angular/router';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  
  pageTitle:string = "Vendor Create";
  vendor:Vendor = new Vendor();

  constructor(
    private router:Router,
    private vendorService:VendorService,
    private sys:SystemService) { }

  save():void {
    this.sys.chkLogin();
    this.vendorService.create(this.vendor).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/vendors/list");
      },
      err =>{
        console.error(err);
      }
    )
  }

  ngOnInit(): void {}
}
