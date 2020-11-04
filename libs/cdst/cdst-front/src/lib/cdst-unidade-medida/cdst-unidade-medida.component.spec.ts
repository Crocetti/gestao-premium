import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstUnidadeMedidaComponent } from './cdst-unidade-medida.component';

describe('CdstUnidadeMedidaComponent', () => {
  let component: CdstUnidadeMedidaComponent;
  let fixture: ComponentFixture<CdstUnidadeMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstUnidadeMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstUnidadeMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
