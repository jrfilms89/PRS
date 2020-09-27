export class Vendor{
    id:number;
    code:string;
    name:string;
    address:string;
    city:string;
    state:string;
    zipCode:string;
    phone:string;
    email:string;

    constructor(){
        this.id = 0;
        this.code = '';
        this.name = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
        this.phone = '';
        this.email = '';
    }
}