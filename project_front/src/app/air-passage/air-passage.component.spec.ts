import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirPassageComponent } from './air-passage.component';

describe('AirPassageComponent', () => {
  let component: AirPassageComponent;
  let fixture: ComponentFixture<AirPassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirPassageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirPassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
