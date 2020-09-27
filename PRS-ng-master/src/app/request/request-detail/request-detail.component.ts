import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  pageTitle:string = "Request Detail | ";
  request:Request = null;
  showDelete:boolean = false;

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
  }

}
