import {Vendor} from '../vendor/vendor.class';
export class Product{
    id:number;
    partNbr:string;
    name:string;
    price:number;
    unit:string;
    photoPath:string;
    vendor:Vendor;
    vendorId:number;
    vendorName:string;

    constructor(){
        this.id = 0;
        this.partNbr = '';
        this.name = '';
        this.price = 0;
        this.unit = '';
        this.photoPath = '';
        this.vendorId = 0;
        this.vendorName = '';
    }
}