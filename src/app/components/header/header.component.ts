import { Component, inject } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ButtonComponent } from '../button/button.component';
import { WeatherService } from '../../services/weather/weather.service';
import { Locations } from '../../interfaces/location';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  handleLocation(event: MouseEvent) {
    this._locationService
      .getPosition()
      .then((values) => this._weatherService.setCurrentPlace(values));
  }

  _locationService = inject(LocationService);

  _weatherService = inject(WeatherService);

  setLocationName(value: Locations) {
    this._weatherService.setCurrentPlace({ lat: value.lat, lon: value.lon });
  }
}
