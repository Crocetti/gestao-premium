import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstFornecedorComponent } from './cdst-fornecedor.component';

describe('CdstFornecedorComponent', () => {
  let component: CdstFornecedorComponent;
  let fixture: ComponentFixture<CdstFornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstFornecedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstFornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
