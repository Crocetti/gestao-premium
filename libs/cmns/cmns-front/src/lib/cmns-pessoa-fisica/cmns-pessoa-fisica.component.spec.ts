import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaFisicaComponent } from './cmns-pessoa-fisica.component';

describe('CmnsPessoaFisicaComponent', () => {
  let component: CmnsPessoaFisicaComponent;
  let fixture: ComponentFixture<CmnsPessoaFisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaFisicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaFisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
