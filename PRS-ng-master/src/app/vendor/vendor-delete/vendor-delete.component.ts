import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-vendor-delete',
  templateUrl: './vendor-delete.component.html',
  styleUrls: ['./vendor-delete.component.css']
})
export class VendorDeleteComponent implements OnInit {

  constructor(private sys:SystemService) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
