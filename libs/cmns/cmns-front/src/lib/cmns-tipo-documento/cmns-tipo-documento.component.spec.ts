import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsTipoDocumentoComponent } from './cmns-tipo-documento.component';

describe('CmnsTipoDocumentoComponent', () => {
  let component: CmnsTipoDocumentoComponent;
  let fixture: ComponentFixture<CmnsTipoDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsTipoDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsTipoDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
