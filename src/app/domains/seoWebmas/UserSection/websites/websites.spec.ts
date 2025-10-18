import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Websites } from './websites';

describe('Websites', () => {
  let component: Websites;
  let fixture: ComponentFixture<Websites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Websites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Websites);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
