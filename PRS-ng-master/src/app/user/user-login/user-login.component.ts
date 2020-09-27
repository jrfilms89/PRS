import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  user:User;
  error: boolean = false;


  signIn(username:string, password:string) {
    if (username == '' || password == '') {
      this.error = true;
      return;
    }
    this.userService.login(username, password).subscribe(
      res => {
        this.error = false;
        this.sys.user = res as User;
        console.log("User: ", this.sys.user);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        this.error = true;
        console.error(err);
      }
    );
  }

  adminLogin(){
    this.userService.login("admin", "admin").subscribe(
      res => {
        this.error = false;
        this.sys.user = res as User;
        console.log("User: ", this.sys.user);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  reviewerLogin(){
    this.userService.login("reviewer", "reviewer").subscribe(
      res => {
        this.error = false;
        this.sys.user = res as User;
        console.log("User: ", this.sys.user);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }

  userLogin(){
    this.userService.login("user", "user").subscribe(
      res => {
        this.error = false;
        this.sys.user = res as User;
        console.log("User: ", this.sys.user);
        this.router.navigateByUrl("/requests/list");
      },
      err => {
        console.error(err);
      }
    );
  }
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private sys:SystemService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
