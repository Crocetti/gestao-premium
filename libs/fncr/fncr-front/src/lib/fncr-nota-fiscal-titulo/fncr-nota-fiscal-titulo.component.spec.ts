import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrNotaFiscalTituloComponent } from './fncr-nota-fiscal-titulo.component';

describe('FncrNotaFiscalTituloComponent', () => {
  let component: FncrNotaFiscalTituloComponent;
  let fixture: ComponentFixture<FncrNotaFiscalTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrNotaFiscalTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrNotaFiscalTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
