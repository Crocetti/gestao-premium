import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaDocumentoComponent } from './cmns-pessoa-documento.component';

describe('CmnsPessoaDocumentoComponent', () => {
  let component: CmnsPessoaDocumentoComponent;
  let fixture: ComponentFixture<CmnsPessoaDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
