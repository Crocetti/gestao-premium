import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaEnderecoComponent } from './cmns-pessoa-endereco.component';

describe('CmnsPessoaEnderecoComponent', () => {
  let component: CmnsPessoaEnderecoComponent;
  let fixture: ComponentFixture<CmnsPessoaEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
