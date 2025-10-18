import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableValuation } from './variable-valuation';

describe('VariableValuation', () => {
  let component: VariableValuation;
  let fixture: ComponentFixture<VariableValuation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableValuation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableValuation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
