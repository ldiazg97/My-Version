import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesConfig } from './sites-config';

describe('SitesConfig', () => {
  let component: SitesConfig;
  let fixture: ComponentFixture<SitesConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitesConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SitesConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
