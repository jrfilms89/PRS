import { Component, OnInit, Input } from '@angular/core';
import { SystemService } from 'src/app/system.service';
import { Menu } from '../menu/menu.class'
import { User } from '../../user/user.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userId:number;

  menus:Menu[] = [new Menu("Home", "/home"),
  new Menu("Users", "/users/list"),
  new Menu("Requests", "/requests/list"),
  new Menu("Vendors", "/vendors/list" ),
  new Menu("Products", "/products/list")];
  constructor(private sys:SystemService) { }

  ngOnInit(): void {
    this.userId = this.sys.user.id;
  }

}
