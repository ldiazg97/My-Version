import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPermits } from './special-permits';

describe('SpecialPermits', () => {
  let component: SpecialPermits;
  let fixture: ComponentFixture<SpecialPermits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialPermits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPermits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
