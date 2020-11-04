import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstProdutoComponent } from './cdst-produto.component';

describe('CdstProdutoComponent', () => {
  let component: CdstProdutoComponent;
  let fixture: ComponentFixture<CdstProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
