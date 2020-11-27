import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteConsultaComponent } from './vete-consulta.component';

describe('VeteConsultaComponent', () => {
  let component: VeteConsultaComponent;
  let fixture: ComponentFixture<VeteConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
