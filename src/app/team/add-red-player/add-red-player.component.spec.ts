import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRedPlayerComponent } from './add-red-player.component';

describe('AddRedPlayerComponent', () => {
  let component: AddRedPlayerComponent;
  let fixture: ComponentFixture<AddRedPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRedPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRedPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
