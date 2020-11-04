import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqFabricanteMotorComponent } from './estq-fabricante-motor.component';

describe('EstqFabricanteMotorComponent', () => {
  let component: EstqFabricanteMotorComponent;
  let fixture: ComponentFixture<EstqFabricanteMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqFabricanteMotorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqFabricanteMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
