import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
  standalone: true
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number, prefix: boolean = true): string {
    if(prefix) {
      return value.toFixed(0).toString() + "°c";
    }
    else {
      return value.toFixed(0).toString() + "°";
    }
  }

}
