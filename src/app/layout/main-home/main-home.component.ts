import { Component, OnInit, inject } from '@angular/core';
import { CurrentCastComponent } from '../../components/current-cast/current-cast.component';
import { ForecastComponent } from '../../components/forecast/forecast.component';
import { Observable, debounceTime, filter } from 'rxjs';
import { WeatherCurrent } from '../../interfaces/weather';
import { WeatherService } from '../../services/weather/weather.service';
import { isNonNull } from '../../shared/utils';
import { HighlightsComponent } from '../highlights/highlights.component';
import { CommonModule } from '@angular/common';
import { TodayForecastComponent } from '../today-forecast/today-forecast.component';
import { TodayWindComponent } from '../today-wind/today-wind.component';

@Component({
  selector: 'app-main-home',
  standalone: true,
  imports: [
    CurrentCastComponent,
    ForecastComponent,
    HighlightsComponent,
    CommonModule,
    TodayForecastComponent,
    TodayWindComponent
  ],
  templateUrl: './main-home.component.html',
  styleUrl: './main-home.component.scss',
})
export class MainHomeComponent implements OnInit {
  _weatherService = inject(WeatherService);

  currentWeatherInfo?: Observable<WeatherCurrent>;

  forecastWeatherInfo?: Observable<any>;

  airQualityInfo?: Observable<any>;

  ngOnInit(): void {
    this._weatherService.currentPlace
      .pipe(debounceTime(500))
      .pipe(filter(isNonNull))
      .subscribe(() => {
        this.currentWeatherInfo = this._weatherService.getCurrentWeather();
      });

    this._weatherService.currentPlace
      .pipe(debounceTime(500))
      .pipe(filter(isNonNull))
      .subscribe(() => {
        this.forecastWeatherInfo = this._weatherService.getForecastWeather();
      });

    this._weatherService.currentPlace
      .pipe(debounceTime(500))
      .pipe(filter(isNonNull))
      .subscribe(() => {
        this.airQualityInfo = this._weatherService.getAirQuality();
      });
  }
}
