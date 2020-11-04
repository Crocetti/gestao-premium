import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaImagemComponent } from './cmns-pessoa-imagem.component';

describe('CmnsPessoaImagemComponent', () => {
  let component: CmnsPessoaImagemComponent;
  let fixture: ComponentFixture<CmnsPessoaImagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaImagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaImagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
