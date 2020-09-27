import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product.class';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string): Product[] {
    if(products == null || searchCriteria == "" || searchCriteria == null) return products;
  
    let newArr: Product[] = [];
    searchCriteria = searchCriteria.toLowerCase();
  
    for(let p of products){
      if(p.partNbr.toLowerCase().includes(searchCriteria)
         || p.name.toLowerCase().includes(searchCriteria)
         || p.price.toString().toLowerCase().includes(searchCriteria)
         || p.unit.toLowerCase().includes(searchCriteria)
         || p.vendorName.toLowerCase().includes(searchCriteria))
      newArr.push(p);
    }
    return newArr;
  }

}
