import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPessoaEmailComponent } from './cmns-pessoa-email.component';

describe('CmnsPessoaEmailComponent', () => {
  let component: CmnsPessoaEmailComponent;
  let fixture: ComponentFixture<CmnsPessoaEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPessoaEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPessoaEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
