import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringTeam } from './monitoring-team';

describe('MonitoringTeam', () => {
  let component: MonitoringTeam;
  let fixture: ComponentFixture<MonitoringTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitoringTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitoringTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
