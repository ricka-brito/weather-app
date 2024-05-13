import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wind-hour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wind-hour.component.html',
  styleUrl: './wind-hour.component.scss'
})
export class WindHourComponent {
  @Input() hour?: number;
  @Input() timezone?: number;
  @Input() iconDirection?: number;
  @Input() velocity?: number;
}
