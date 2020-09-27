import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  constructor(private sys:SystemService) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
