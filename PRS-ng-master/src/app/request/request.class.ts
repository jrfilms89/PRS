import { User } from "../user/user.class";
import { Requestitem } from '../requestitem/requestitem.class';

export class Request{
    id:number;
    description:string;
    justification:string;
    rejectionReason:string;
    deliveryMode:string;
    status:string;
    total:number;
    user:User;
    userId:number;
    requestlines:Requestitem;

    constructor(){
        this.id = 0;
        this.description = '';
        this.justification = '';
        this.rejectionReason = '';
        this.deliveryMode = 'Pick Up';
        this.status = 'NEW';
        this.total = 0;
        this.userId = 0;
    }
}