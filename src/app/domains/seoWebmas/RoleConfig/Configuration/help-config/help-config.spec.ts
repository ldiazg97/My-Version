import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpConfig } from './help-config';

describe('HelpConfig', () => {
  let component: HelpConfig;
  let fixture: ComponentFixture<HelpConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
