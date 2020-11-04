import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrTituloCentroCustoComponent } from './fncr-titulo-centro-custo.component';

describe('FncrTituloCentroCustoComponent', () => {
  let component: FncrTituloCentroCustoComponent;
  let fixture: ComponentFixture<FncrTituloCentroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrTituloCentroCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrTituloCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
