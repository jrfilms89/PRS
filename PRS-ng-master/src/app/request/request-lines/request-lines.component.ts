import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestitem } from '../../requestitem/requestitem.class'
import { RequestitemService } from '../../requestitem/requestitem.service';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  pageTitle:string = "Request Lines | ";
  user:User;
  request:Request = null;
  myRequest:boolean = false;
  showDelete:boolean = false;
  requestitem:Requestitem = null;

  
  verify():void {this.showDelete = !this.showDelete}
  delete(id:number, requestid:number):void {
    
    this.reqLineService.delete(id).subscribe(
      res =>{
        console.log(res);
        this.refresh(requestid);
      },
      err => {
        console.error(err);
        this.refresh(requestid);
      }
    )
  }

  review(request:Request){
    this.reqService.review(request).subscribe(
      res =>{
        console.log(res);
        this.refresh(this.request.id);
      },
      err =>{
        console.error(err);
        
      }
    );
  }

  refresh(id: number): void {
    this.reqService.detail(id).subscribe(
      res => {
        console.log(res);
        this.request = res as Request;
      },
      err => { console.error(err) }
    )
  }

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private reqService:RequestService,
    private reqLineService:RequestitemService,
    private sys:SystemService) { }

    
  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.reqService.detail(+id).subscribe(
      res => {this.request = res as Request;
        this.user = this.sys.user;
        this.myRequest = (this.request.userId == this.user.id) ? true : false;
        console.log(res);},
      err => {console.error(err)}
    );
  }

}
