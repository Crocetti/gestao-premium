import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmParametroEmpresaComponent } from './sstm-parametro-empresa.component';

describe('SstmParametroEmpresaComponent', () => {
  let component: SstmParametroEmpresaComponent;
  let fixture: ComponentFixture<SstmParametroEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmParametroEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmParametroEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
