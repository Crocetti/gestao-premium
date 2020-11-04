import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrHistoricoPadraoComponent } from './fncr-historico-padrao.component';

describe('FncrHistoricoPadraoComponent', () => {
  let component: FncrHistoricoPadraoComponent;
  let fixture: ComponentFixture<FncrHistoricoPadraoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrHistoricoPadraoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrHistoricoPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
