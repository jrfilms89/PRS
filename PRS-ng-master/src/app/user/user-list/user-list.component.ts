import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle:string = "User List | ";
  sortCol:string = "id"
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

  constructor(
    private userService: UserService,
    private sys:SystemService
  ) { }

    page = 4;
    pageSize = 25;
  
  users:User[];

  ngOnInit(): void {
    this.sys.chkLogin();
    this.userService.list().subscribe(
      res => {
      this.users = res as User[]},
      err =>{console.error(err)}
    );
  }

}
