import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webmasters } from './webmasters';

describe('Webmasters', () => {
  let component: Webmasters;
  let fixture: ComponentFixture<Webmasters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Webmasters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webmasters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
