import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSItes } from './test-sites';

describe('TestSItes', () => {
  let component: TestSItes;
  let fixture: ComponentFixture<TestSItes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSItes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSItes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
