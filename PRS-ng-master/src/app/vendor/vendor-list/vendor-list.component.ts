import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle:string = "Vendor List | ";
  sortCol:string = "id";
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
  isLoggedIn:boolean = false;

  constructor(
    private vendorService: VendorService,
    private sys:SystemService
  ) { }

    page = 4;
    pageSize = 25;
  
  vendors:Vendor[];

  ngOnInit(): void {
    this.sys.chkLogin();
    this.vendorService.list().subscribe(
      res => {
      this.vendors = res as Vendor[]},
      err =>{console.error(err)}
    );
  }

}
