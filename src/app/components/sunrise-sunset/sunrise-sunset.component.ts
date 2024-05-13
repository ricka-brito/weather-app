import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherCurrent } from '../../interfaces/weather';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sunrise-sunset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sunrise-sunset.component.html',
  styleUrl: './sunrise-sunset.component.scss'
})
export class SunriseSunsetComponent {
  @Input() infos?: Observable<WeatherCurrent>;


}
