import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsProfissaoComponent } from './cmns-profissao.component';

describe('CmnsProfissaoComponent', () => {
  let component: CmnsProfissaoComponent;
  let fixture: ComponentFixture<CmnsProfissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsProfissaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsProfissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
