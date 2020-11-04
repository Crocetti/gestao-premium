import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqProdutoSaldoComponent } from './estq-produto-saldo.component';

describe('EstqProdutoSaldoComponent', () => {
  let component: EstqProdutoSaldoComponent;
  let fixture: ComponentFixture<EstqProdutoSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqProdutoSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqProdutoSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
