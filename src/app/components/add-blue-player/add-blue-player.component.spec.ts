import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBluePlayerComponent } from './add-blue-player.component';

describe('AddBluePlayerComponent', () => {
  let component: AddBluePlayerComponent;
  let fixture: ComponentFixture<AddBluePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBluePlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBluePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
