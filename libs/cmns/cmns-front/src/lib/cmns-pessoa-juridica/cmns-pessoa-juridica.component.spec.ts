import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaJuridicaComponent } from './cmns-pessoa-juridica.component';

describe('CmnsPessoaJuridicaComponent', () => {
  let component: CmnsPessoaJuridicaComponent;
  let fixture: ComponentFixture<CmnsPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaJuridicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
