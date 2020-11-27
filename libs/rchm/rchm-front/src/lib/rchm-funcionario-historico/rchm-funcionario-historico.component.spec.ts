import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RchmFuncionarioHistoricoComponent } from './rchm-funcionario-historico.component';

describe('RchmFuncionarioHistoricoComponent', () => {
  let component: RchmFuncionarioHistoricoComponent;
  let fixture: ComponentFixture<RchmFuncionarioHistoricoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RchmFuncionarioHistoricoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RchmFuncionarioHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
