import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrEspecieComponent } from './pecr-especie.component';

describe('PecrEspecieComponent', () => {
  let component: PecrEspecieComponent;
  let fixture: ComponentFixture<PecrEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrEspecieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
