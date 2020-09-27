import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string): User[] {

    if(users == null || searchCriteria == "" || searchCriteria == null) return users;

    let newArr: User[] = [];
    searchCriteria = searchCriteria.toLowerCase();

    for(let u of users){
      if(u.firstname.toLowerCase().includes(searchCriteria)
         || u.lastname.toLowerCase().includes(searchCriteria)
         || u.phone.toString().includes(searchCriteria)
         || u.email.toString().includes(searchCriteria)
         || u.isReviewer.toString().includes(searchCriteria)
         || u.isAdmin.toString().includes(searchCriteria))
      newArr.push(u);
    }
    return newArr;
  }

}
