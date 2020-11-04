import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrCaixaMovimentoComponent } from './fncr-caixa-movimento.component';

describe('FncrCaixaMovimentoComponent', () => {
  let component: FncrCaixaMovimentoComponent;
  let fixture: ComponentFixture<FncrCaixaMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrCaixaMovimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrCaixaMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
