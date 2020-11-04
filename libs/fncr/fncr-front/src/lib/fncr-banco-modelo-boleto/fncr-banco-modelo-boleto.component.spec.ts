import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrBancoModeloBoletoComponent } from './fncr-banco-modelo-boleto.component';

describe('FncrBancoModeloBoletoComponent', () => {
  let component: FncrBancoModeloBoletoComponent;
  let fixture: ComponentFixture<FncrBancoModeloBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrBancoModeloBoletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrBancoModeloBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
