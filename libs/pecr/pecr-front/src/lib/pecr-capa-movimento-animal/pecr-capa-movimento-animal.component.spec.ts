import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrCapaMovimentoAnimalComponent } from './pecr-capa-movimento-animal.component';

describe('PecrCapaMovimentoAnimalComponent', () => {
  let component: PecrCapaMovimentoAnimalComponent;
  let fixture: ComponentFixture<PecrCapaMovimentoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrCapaMovimentoAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrCapaMovimentoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
