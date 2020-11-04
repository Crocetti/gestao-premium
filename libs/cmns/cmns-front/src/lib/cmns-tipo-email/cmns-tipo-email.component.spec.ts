import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsTipoEmailComponent } from './cmns-tipo-email.component';

describe('CmnsTipoEmailComponent', () => {
  let component: CmnsTipoEmailComponent;
  let fixture: ComponentFixture<CmnsTipoEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsTipoEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsTipoEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
