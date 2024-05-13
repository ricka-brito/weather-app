import { Component, Input } from '@angular/core';
import { TemperaturePipe } from '../../pipes/temperature/temperature.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temperature-hour',
  standalone: true,
  imports: [TemperaturePipe, CommonModule],
  templateUrl: './temperature-hour.component.html',
  styleUrl: './temperature-hour.component.scss'
})
export class TemperatureHourComponent {
 @Input() hour?: number;
 @Input() timezone?: number;
 @Input() icon?: string;
 @Input() temperature?: number;

}
