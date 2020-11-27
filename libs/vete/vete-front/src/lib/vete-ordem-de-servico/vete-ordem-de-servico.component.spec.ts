import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteOrdemDeServicoComponent } from './vete-ordem-de-servico.component';

describe('VeteOrdemDeServicoComponent', () => {
  let component: VeteOrdemDeServicoComponent;
  let fixture: ComponentFixture<VeteOrdemDeServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteOrdemDeServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteOrdemDeServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
