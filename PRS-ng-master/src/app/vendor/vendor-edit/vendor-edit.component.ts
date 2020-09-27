import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  
  pageTitle:string = "Vendor Edit | ";
  vendor:Vendor = null;
  showDelete:boolean = false;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private vendorService:VendorService,
    private sys:SystemService) { }

    
    verify():void {this.showDelete = !this.showDelete}
    delete():void {
      this.vendorService.delete(this.vendor.id).subscribe(
        res =>{
          this.router.navigateByUrl("/vendors/list");
        },
        err => {
          console.error(err);
        }
      )
    }

    edit():void {
      this.vendorService.edit(this.vendor).subscribe(
        res =>{
          this.vendor = res as Vendor;
          this.router.navigateByUrl("/vendors/list");
        },
        err =>{
          console.error(err);
        }
      )
    }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.vendorService.detail(+id).subscribe(
      res => {this.vendor = res as Vendor;},
      err => {console.error(err)}
    )
  }

}
