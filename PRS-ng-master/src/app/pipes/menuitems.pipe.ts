import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../core/menu/menu.class'

@Pipe({
  name: 'menuitems'
})
export class MenuitemsPipe implements PipeTransform {

  transform(menus: Menu[], isRev:boolean = false): Menu[] {
    if(isRev)return menus;
      let selMenus:Menu[] = [];
      for(let m of menus){
        if(m.display !== 'Review')
        selMenus.push(m);
      }
      return selMenus;
  }

}
