import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetePorteComponent } from './vete-porte.component';

describe('VetePorteComponent', () => {
  let component: VetePorteComponent;
  let fixture: ComponentFixture<VetePorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetePorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetePorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
