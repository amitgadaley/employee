import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {
  transform(items: any, filter: any): any {
    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      return items.filter(item => {
        return filterKeys.some((keyName) => {
          if (keyName == "city") {
            return new RegExp(filter[keyName], 'gi').test(item.address[keyName]) || filter[keyName] === "";
          } else {
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === "";
          }
        });
      });
    } else {
      return items;
    }
  }
}
