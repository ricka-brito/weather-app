import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCastComponent } from './current-cast.component';

describe('CurrentCastComponent', () => {
  let component: CurrentCastComponent;
  let fixture: ComponentFixture<CurrentCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
