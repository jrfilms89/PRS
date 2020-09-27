import { Injectable, Input } from '@angular/core';
import { User } from '../app/user/user.class'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  user:User = null;
  chkLogin():void{
    // if(this.user != null)
    //   this.router.navigateByUrl("/users/create");
    return;
}
  constructor(private router:Router) { }
}
