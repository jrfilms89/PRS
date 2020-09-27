import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from '../vendor/vendor.class';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string): Vendor[] {

    if(vendors == null || searchCriteria == "" || searchCriteria == null) return vendors;

    let newArr: Vendor[] = [];
    searchCriteria = searchCriteria.toLowerCase();

    for(let v of vendors){
      if(v.code.toLowerCase().includes(searchCriteria)
         || v.name.toLowerCase().includes(searchCriteria)
         || (v.phone != null && v.phone.toLowerCase().includes(searchCriteria))
         || (v.email != null && v.email.toLowerCase().includes(searchCriteria))
         || v.address.toLowerCase().includes(searchCriteria)
         || v.city.toLowerCase().includes(searchCriteria)
         || v.state.toLowerCase().includes(searchCriteria)
         || v.zipCode.includes(searchCriteria))
      newArr.push(v);
    }
    return newArr;
  }

}
