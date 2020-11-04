import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaTelefoneComponent } from './cmns-pessoa-telefone.component';

describe('CmnsPessoaTelefoneComponent', () => {
  let component: CmnsPessoaTelefoneComponent;
  let fixture: ComponentFixture<CmnsPessoaTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaTelefoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
