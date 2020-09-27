import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle:string = "User Create";
  user:User = new User();

  constructor(
    private router:Router,
    private userService:UserService,
    private sys:SystemService) { }

  save():void {
    this.userService.create(this.user).subscribe(
      res =>{
        console.log(res);
        this.router.navigateByUrl("/users/list");
      },
      err =>{
        console.error(err);
      }
    )
  }

  ngOnInit(): void {}
}
