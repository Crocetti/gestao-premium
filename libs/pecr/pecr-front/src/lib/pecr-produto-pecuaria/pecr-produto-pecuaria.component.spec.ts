import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrProdutoPecuariaComponent } from './pecr-produto-pecuaria.component';

describe('PecrProdutoPecuariaComponent', () => {
  let component: PecrProdutoPecuariaComponent;
  let fixture: ComponentFixture<PecrProdutoPecuariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrProdutoPecuariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrProdutoPecuariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
