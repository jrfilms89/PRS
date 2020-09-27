export class User{
    id:number;
    username:string;
    password:string;
    firstname:string;
    lastname:string;
    phone:string;
    email:string;
    isReviewer:boolean;
    isAdmin:boolean;

    constructor(){
        this.id = 0;
        this.username = '';
        this.password = '';
        this.firstname = '';
        this.lastname = '';
        this.phone = '';
        this.email = '';
        this.isReviewer = false;
        this.isAdmin = false;
    }
}