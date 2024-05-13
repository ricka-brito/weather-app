import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output, forwardRef, inject, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Locations } from '../../interfaces/location';
import { WeatherService } from '../../services/weather/weather.service';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent{
  _weatherService = inject(WeatherService);
  @ViewChild('searchbar') toggleButton?: ElementRef;

  isSearching = false;

  @Output() setlocationNameEvent = new EventEmitter<Locations>();

  locations?: Observable<Locations[]>

  @HostListener('document:mousedown', ['$event'])
  onGlobalClick(event: Event): void {
     if (!this.toggleButton?.nativeElement.contains(event.target)) {
        // clicked outside => close dropdown list
     this.isSearching = false;
     }
  }

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value

    this.locations = this._weatherService.getReverseGeocoding(value)

    this.isSearching = true;
    // this.setlocationNameEvent.emit(value)
  }

  onSelect(location: Locations){
    this.isSearching = false;
    this.setlocationNameEvent.emit(location)
  }
}
