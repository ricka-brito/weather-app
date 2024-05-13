import { Component, Input } from '@angular/core';
import { TemperatureHourComponent } from '../../components/temperature-hour/temperature-hour.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../../interfaces/weather';

@Component({
  selector: 'app-today-forecast',
  standalone: true,
  imports: [TemperatureHourComponent, CommonModule],
  templateUrl: './today-forecast.component.html',
  styleUrl: './today-forecast.component.scss'
})
export class TodayForecastComponent {
  @Input() forecastInfo?: Observable<WeatherForecast>;
}
