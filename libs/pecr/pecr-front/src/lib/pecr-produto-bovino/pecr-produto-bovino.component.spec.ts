import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrProdutoBovinoComponent } from './pecr-produto-bovino.component';

describe('PecrProdutoBovinoComponent', () => {
  let component: PecrProdutoBovinoComponent;
  let fixture: ComponentFixture<PecrProdutoBovinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrProdutoBovinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrProdutoBovinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
