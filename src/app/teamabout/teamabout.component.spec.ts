import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamaboutComponent } from './teamabout.component';

describe('TeamaboutComponent', () => {
  let component: TeamaboutComponent;
  let fixture: ComponentFixture<TeamaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
