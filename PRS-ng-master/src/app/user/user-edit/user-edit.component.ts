import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.class';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pageTitle:string = "User Edit | ";
  user:User = null;
  showDelete:boolean = false;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private userService:UserService,
    private sys:SystemService) { }

    
    verify():void {this.showDelete = !this.showDelete}
    delete():void {
      this.userService.delete(this.user.id).subscribe(
        res =>{
          console.log(res);
          this.router.navigateByUrl("/users/list");
        },
        err => {
          console.error(err);
        }
      )
    }

    edit():void {
      this.userService.edit(this.user).subscribe(
        res =>{
          console.log(res);
          this.router.navigateByUrl("/users/list");
        },
        err =>{
          console.error(err);
        }
      )
    }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.userService.detail(+id).subscribe(
      res => {this.user = res as User;},
      err => {console.error(err)}
    )
  }
}
