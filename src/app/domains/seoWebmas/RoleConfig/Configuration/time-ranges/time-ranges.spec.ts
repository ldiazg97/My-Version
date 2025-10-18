import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRanges } from './time-ranges';

describe('TimeRanges', () => {
  let component: TimeRanges;
  let fixture: ComponentFixture<TimeRanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeRanges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeRanges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
