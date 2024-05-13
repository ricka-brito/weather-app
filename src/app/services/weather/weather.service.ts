import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ResponseQuality,
  WeatherCurrent,
  WeatherForecast,
} from '../../interfaces/weather';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Locations } from '../../interfaces/location';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  currentPlace = new BehaviorSubject<{lat: number | null, lon: number | null}>({lat: -22.90556, lon: -47.06083});

  getCurrentPlace() {
    return this.currentPlace.value;
  }

  setCurrentPlace(currentPlace: {lat: number, lon: number}) {
    this.currentPlace.next(currentPlace);
  }

  key = 'a985cd57e42d3189b2865852d5818f82';

  getReverseGeocoding(query: string) {
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${this.key}`

    return this.http.get<Locations[]>(url);
  }

  getCurrentWeather() {
    // let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${this.key}`

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.currentPlace.value.lat}&lon=${this.currentPlace.value.lon}&units=metric&appid=${this.key}`;
    return this.http.get<WeatherCurrent>(url);

    // ------------------- MOCKED DATA --------------------
    // return of({
    //   coord: { lon: -47.0613, lat: -22.9051 },
    //   weather: [
    //     { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
    //   ],
    //   base: 'stations',
    //   main: {
    //     temp: 29.89,
    //     feels_like: 29.25,
    //     temp_min: 29.89,
    //     temp_max: 30.62,
    //     pressure: 1016,
    //     humidity: 37,
    //   },
    //   visibility: 10000,
    //   wind: { speed: 3.6, deg: 40 },
    //   clouds: { all: 0 },
    //   dt: 1715016334,
    //   sys: {
    //     type: 1,
    //     id: 8393,
    //     country: 'BR',
    //     sunrise: 1714987808,
    //     sunset: 1715027969,
    //   },
    //   timezone: -10800,
    //   id: 3467865,
    //   name: 'Campinas',
    //   cod: 200,
    // });
  }

  getForecastWeather() {
    let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.currentPlace.value.lat}&lon=${this.currentPlace.value.lon}&units=metric&appid=${this.key}`;

    return this.http.get<WeatherForecast>(url);
  }

  getAirQuality() {
    let url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${this.currentPlace.value.lat}&lon=${this.currentPlace.value.lon}&appid=${this.key}`;

    return this.http.get<ResponseQuality>(url).pipe(
      map((data) => {
        return {
          aqi: data.list[0].main.aqi,
          components: [
            { name: ['PM', '2.5'], value: data.list[0].components.pm2_5 },
            { name: ['So', "2"], value: data.list[0].components.so2 },
            { name: ['No', '2'], value: data.list[0].components.no2 },
            { name: ['O', '3'], value: data.list[0].components.o3 },
          ],
        };
      })
    );
  }
}
