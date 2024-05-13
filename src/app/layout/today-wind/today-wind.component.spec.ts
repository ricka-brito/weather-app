import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWindComponent } from './today-wind.component';

describe('TodayWindComponent', () => {
  let component: TodayWindComponent;
  let fixture: ComponentFixture<TodayWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayWindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodayWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
