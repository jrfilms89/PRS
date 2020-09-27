import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column: string = "id", asc: boolean): any[] {
    
    
    if(arr == null) return arr;

    const sortFN = (a: any, b: any): number => {
      // if a & b are equal, return 0;
      // if a > b, return 1; if a < b, return -1;
      let x = (typeof a[column] == "number") ? a[column] : a[column].toString().toLowerCase();
      let y = (typeof b[column] == "number") ? b[column] : b[column].toString().toLowerCase();
      if (x === y) return 0;
      if (x > y) return asc ? 1 : -1;
      else return asc ? -1 : 1;
    }

    return arr.sort(sortFN);
  }
}
