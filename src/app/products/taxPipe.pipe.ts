
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({

  name: 'taxpipe'

})

export class MyTaxPipe implements PipeTransform {
  transform(value: number) {
    if (value >= 30) {
     value = value + 3 ;
    }
    return value;
  }
}
