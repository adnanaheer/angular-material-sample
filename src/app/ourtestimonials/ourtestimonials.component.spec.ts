import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurtestimonialsComponent } from './ourtestimonials.component';

describe('OurtestimonialsComponent', () => {
  let component: OurtestimonialsComponent;
  let fixture: ComponentFixture<OurtestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurtestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurtestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
