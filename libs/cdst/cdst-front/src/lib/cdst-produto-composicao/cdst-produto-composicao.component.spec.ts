import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstProdutoComposicaoComponent } from './cdst-produto-composicao.component';

describe('CdstProdutoComposicaoComponent', () => {
  let component: CdstProdutoComposicaoComponent;
  let fixture: ComponentFixture<CdstProdutoComposicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstProdutoComposicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstProdutoComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
