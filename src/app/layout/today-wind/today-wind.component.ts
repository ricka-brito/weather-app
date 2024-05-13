import { Component, Input } from '@angular/core';
import { WindHourComponent } from '../../components/wind-hour/wind-hour.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { WeatherForecast } from '../../interfaces/weather';

@Component({
  selector: 'app-today-wind',
  standalone: true,
  imports: [WindHourComponent, CommonModule],
  templateUrl: './today-wind.component.html',
  styleUrl: './today-wind.component.scss'
})
export class TodayWindComponent {
  @Input() forecastInfo?: Observable<WeatherForecast>;
}
