import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvcServicoComposicaoComponent } from './srvc-servico-composicao.component';

describe('SrvcServicoComposicaoComponent', () => {
  let component: SrvcServicoComposicaoComponent;
  let fixture: ComponentFixture<SrvcServicoComposicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvcServicoComposicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvcServicoComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
