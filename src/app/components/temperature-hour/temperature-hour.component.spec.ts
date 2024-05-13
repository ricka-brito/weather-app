import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHourComponent } from './temperature-hour.component';

describe('TemperatureHourComponent', () => {
  let component: TemperatureHourComponent;
  let fixture: ComponentFixture<TemperatureHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperatureHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemperatureHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
