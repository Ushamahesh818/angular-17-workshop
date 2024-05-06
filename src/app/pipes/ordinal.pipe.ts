import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone: true
})
export class OrdinalPipe implements PipeTransform {

  transform(order:number): string {
    let ord = 'th';

  if (order % 10 == 1 && order % 100 != 11)
  {
    ord = 'st';
  }
  else if (order % 10 == 2 && order % 100 != 12)
  {
    ord = 'nd';
  }
  else if (order % 10 == 3 && order % 100 != 13)
  {
    ord = 'rd';
  }

  return ord;
  }
}
