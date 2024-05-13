import { Component, OnInit, inject, signal } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CurrentCastComponent } from '../../components/current-cast/current-cast.component';
import { WeatherService } from '../../services/weather/weather.service';
import { Observable, debounceTime, distinctUntilChanged, filter } from 'rxjs';
import { WeatherCurrent } from '../../interfaces/weather';
import { isNonNull } from '../../shared/utils';
import { MainHomeComponent } from '../../layout/main-home/main-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, MainHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{


}
