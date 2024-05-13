import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperaturePipe } from '../../pipes/temperature/temperature.pipe';
import { CommonModule } from '@angular/common';
import { WeatherCurrent } from '../../interfaces/weather';

@Component({
  selector: 'app-current-cast',
  standalone: true,
  imports: [TemperaturePipe, CommonModule],
  templateUrl: './current-cast.component.html',
  styleUrl: './current-cast.component.scss'
})
export class CurrentCastComponent {

  @Input() infos? : Observable<WeatherCurrent>

  date?: Date = new Date();
}
