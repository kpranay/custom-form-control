import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'testdecimal',
  pure: false
})
export class TestdecimalPipe extends DecimalPipe implements PipeTransform {

  transform(value: number, digitsInfo: string): string {
    console.log('inside tbldDecimalPipe :', value, digitsInfo);
    const test = super.transform(value, digitsInfo);
    console.log(test);
    return ''+test;
  }
}

