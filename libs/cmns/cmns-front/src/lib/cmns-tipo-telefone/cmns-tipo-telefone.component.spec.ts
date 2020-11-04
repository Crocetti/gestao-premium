import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsTipoTelefoneComponent } from './cmns-tipo-telefone.component';

describe('CmnsTipoTelefoneComponent', () => {
  let component: CmnsTipoTelefoneComponent;
  let fixture: ComponentFixture<CmnsTipoTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsTipoTelefoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsTipoTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
