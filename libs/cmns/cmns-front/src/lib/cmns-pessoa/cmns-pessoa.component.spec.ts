import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaComponent } from './cmns-pessoa.component';

describe('CmnsPessoaComponent', () => {
  let component: CmnsPessoaComponent;
  let fixture: ComponentFixture<CmnsPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
