import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDotComponent } from './click-dot.component';

describe('ClickDotComponent', () => {
  let component: ClickDotComponent;
  let fixture: ComponentFixture<ClickDotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickDotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
