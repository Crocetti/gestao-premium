import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqSaldoCentroCustoComponent } from './estq-saldo-centro-custo.component';

describe('EstqSaldoCentroCustoComponent', () => {
  let component: EstqSaldoCentroCustoComponent;
  let fixture: ComponentFixture<EstqSaldoCentroCustoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqSaldoCentroCustoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqSaldoCentroCustoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
