import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstProdutoEquivalenteComponent } from './cdst-produto-equivalente.component';

describe('CdstProdutoEquivalenteComponent', () => {
  let component: CdstProdutoEquivalenteComponent;
  let fixture: ComponentFixture<CdstProdutoEquivalenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstProdutoEquivalenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstProdutoEquivalenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
