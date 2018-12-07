import { Pipe, PipeTransform } from '@angular/core';
import { Productmodel } from './product.model';


@Pipe({
  name: 'searchBar'
})

export class SearchBarPipe implements PipeTransform {
  transform(value: Productmodel[], filterBy: string): Productmodel[] {
    filterBy = filterBy ? filterBy.toLowerCase() : null;
    return filterBy ? value.filter((allproducts: Productmodel) => allproducts
    .productName.toLowerCase().indexOf(filterBy) !== -1 ) : value;
  }
}
