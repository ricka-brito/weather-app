import { Pipe, PipeTransform } from '@angular/core';
import { ListNextDays } from '../../interfaces/weather';

@Pipe({
  name: 'forecast',
  standalone: true
})
export class ForecastPipe implements PipeTransform {

  transform(value: ListNextDays[]): ListNextDays[] {

    let valueFormated = []

    for(let i=7,len=value.length;i<len;i+=8) {
      valueFormated.push(value[i])
    }

    return valueFormated;
  }

}
