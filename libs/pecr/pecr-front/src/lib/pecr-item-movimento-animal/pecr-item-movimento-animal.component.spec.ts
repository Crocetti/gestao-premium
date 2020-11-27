import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrItemMovimentoAnimalComponent } from './pecr-item-movimento-animal.component';

describe('PecrItemMovimentoAnimalComponent', () => {
  let component: PecrItemMovimentoAnimalComponent;
  let fixture: ComponentFixture<PecrItemMovimentoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrItemMovimentoAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrItemMovimentoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
