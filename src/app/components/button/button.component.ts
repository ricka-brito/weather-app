import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text?: string;
  @Output() onClick = new EventEmitter<MouseEvent>();
  @Input() disabled: boolean = false;



  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }
}
