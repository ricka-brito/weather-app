import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-specific-info',
  standalone: true,
  imports: [],
  templateUrl: './specific-info.component.html',
  styleUrl: './specific-info.component.scss'
})
export class SpecificInfoComponent {
  @Input() title?: string;
  @Input() value?: string | number;
  @Input() suffix?: string;
}
