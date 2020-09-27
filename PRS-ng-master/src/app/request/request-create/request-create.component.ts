import { Component, OnInit } from '@angular/core';
import { Request } from '../request.class'
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  user:User;
  pageTitle:string = "Request Create";
  request:Request = new Request();
  

  constructor(
    private router:Router,
    private requestService:RequestService,
    private userService:UserService,
    private sys:SystemService) { }

  save():void {
    this.request.userId = +this.sys.user.id;
    this.requestService.create(this.request).subscribe(
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
    this.user = this.sys.user;
  }
  

}
