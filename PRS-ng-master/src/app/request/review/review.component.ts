import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  pageTitle:string = "Review List | ";
  sortCol:string = "id";
  sortAsc:boolean = true;
  user:User;
  createPage:string = (this.sys.user) ? `/requests/create/${this.sys.user.id}` : "/users/login";

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
  
  requests:Request;

  ngOnInit(): void {
    this.sys.chkLogin();
    this.requestService.reviewList(this.sys.user.id).subscribe(
      res => {
      this.requests = res as Request},
      err =>{console.error(err)}
    );

    this.user = this.sys.user;
  }

}
