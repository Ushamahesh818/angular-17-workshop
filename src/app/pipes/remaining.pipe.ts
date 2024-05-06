import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  standalone: true
})
export class RemainingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
