import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScorePanelComponent } from './team-score-panel.component';

describe('TeamScorePanelComponent', () => {
  let component: TeamScorePanelComponent;
  let fixture: ComponentFixture<TeamScorePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamScorePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamScorePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
