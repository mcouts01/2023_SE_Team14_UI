import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueTeamComponent } from './blue-team.component';

describe('BlueTeamComponent', () => {
  let component: BlueTeamComponent;
  let fixture: ComponentFixture<BlueTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
