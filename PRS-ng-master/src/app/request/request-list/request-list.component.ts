import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle:string = "Request List | ";
  sortCol:string = "id"
  sortAsc:boolean = true;
  user:User;
  createPage:string = (this.sys.user) ? `/requests/create/${this.sys.user.id}` : "/users/login";
  isReviewer:boolean;
  isAdmin:boolean;

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
    private requestService: RequestService,
    private sys:SystemService
  ) { }

    page = 4;
    pageSize = 25;
  
  requests:Request[];

  ngOnInit(): void {
    this.sys.chkLogin();
    this.requestService.list().subscribe(
      res => {
      this.requests = res as Request[]},
      err =>{console.error(err)}
    );

    this.user = this.sys.user;
    this.isReviewer = this.sys.user.isReviewer;
    this.isAdmin = this.sys.user.isAdmin;
  }

}
