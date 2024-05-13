import { Component, Input } from '@angular/core';
import { AirQualityComponent } from '../../components/air-quality/air-quality.component';
import { Observable } from 'rxjs';
import { SunriseSunsetComponent } from '../../components/sunrise-sunset/sunrise-sunset.component';
import { WeatherCurrent } from '../../interfaces/weather';
import { SpecificInfoComponent } from '../../components/specific-info/specific-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [
    AirQualityComponent,
    SunriseSunsetComponent,
    SpecificInfoComponent,
    CommonModule,
  ],
  templateUrl: './highlights.component.html',
  styleUrl: './highlights.component.scss',
})
export class HighlightsComponent {
  @Input() airQualityInfo?: Observable<{
    aqi: number;
    components: Array<{ name: string[]; value: number }>;
  }>;

  @Input() weatherInfo?: Observable<WeatherCurrent>;
}
