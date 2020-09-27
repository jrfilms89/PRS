import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private sys:SystemService) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
