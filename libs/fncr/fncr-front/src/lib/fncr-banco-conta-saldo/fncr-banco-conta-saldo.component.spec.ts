import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrBancoContaSaldoComponent } from './fncr-banco-conta-saldo.component';

describe('FncrBancoContaSaldoComponent', () => {
  let component: FncrBancoContaSaldoComponent;
  let fixture: ComponentFixture<FncrBancoContaSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrBancoContaSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrBancoContaSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
