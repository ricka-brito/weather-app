import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindHourComponent } from './wind-hour.component';

describe('WindHourComponent', () => {
  let component: WindHourComponent;
  let fixture: ComponentFixture<WindHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindHourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WindHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
