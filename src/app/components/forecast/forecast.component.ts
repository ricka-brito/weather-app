import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListNextDays } from '../../interfaces/weather';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { ForecastPipe } from '../../pipes/forecast/forecast.pipe';
import { TemperaturePipe } from '../../pipes/temperature/temperature.pipe';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule, ForecastPipe, TemperaturePipe],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss',
})
export class ForecastComponent {
  @Input() infos?: Observable<any>;

}
