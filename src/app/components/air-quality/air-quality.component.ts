import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-air-quality',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './air-quality.component.html',
  styleUrl: './air-quality.component.scss',
})
export class AirQualityComponent {
  @Input() airQualityInfo?: Observable<{
    aqi: number;
    components: Array<{ name: string[]; value: number }>;
  }>;

  aqiText = [
    {
      level: 'Good',
      message:
        'Air quality is considered satisfactory, and air pollution poses little or no risk',
      color: '#89e589',
    },
    {
      level: 'Fair',
      message:
        'Air quality is acceptable; however, for some pollutants, there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution',
      color: '#e5dd89',
    },
    {
      level: 'Moderate',
      message:
        'Members of sensitive groups may experience health affect. the general public is not likely to be affected.',
      color: '#e5c089',
    },
    {
      level: 'Poor',
      message:
        'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
      color: '#e58989',
    },
    {
      level: 'Very Poor',
      message:
        'Health warnings of emergency conditions. the entire population is more likely to be affected.',
      color: '#e589b7',
    },
  ];
}
