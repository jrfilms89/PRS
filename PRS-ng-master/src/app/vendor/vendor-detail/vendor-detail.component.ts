import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  isAdmin:boolean;
  pageTitle:string = "Vendor Detail | ";
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
          console.log(res);
          this.router.navigateByUrl("/vendors/list");
        },
        err => {
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
    );

    this.isAdmin = this.sys.user.isAdmin;
  }

}
