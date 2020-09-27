import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class'
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  pageTitle:string = "Request Edit";
  request:Request = null;
  showDelete:boolean = false;
  isReviewer:boolean;

  verify():void {this.showDelete = !this.showDelete}
  delete():void {
    this.reqService.delete(this.request.id).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    )
  }

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private reqService:RequestService,
    private sys:SystemService) { }

    edit():void {
      if(this.request.status === 'approved'){
        this.reqService.approved(this.request).subscribe(
          res =>{console.log("APPROVED: ", res)},
          err =>{console.error(err)}
        );
      } else if(this.request.status === 'rejected'){
        this.reqService.rejected(this.request).subscribe(
          res =>{console.log("REJECTED: ", res)},
          err =>{console.error(err)}
        );
      }
      this.reqService.edit(this.request).subscribe(
        res =>{
          console.log(res);
          this.router.navigateByUrl("/requests/list");
        },
        err =>{
          console.error(err);
        }
      )
    }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.reqService.detail(+id).subscribe(
      res => {this.request = res as Request;},
      err => {console.error(err)}
    )

    this.isReviewer = this.sys.user.isReviewer;
  }

}
