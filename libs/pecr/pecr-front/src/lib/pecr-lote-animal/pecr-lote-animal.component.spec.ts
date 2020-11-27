import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrLoteAnimalComponent } from './pecr-lote-animal.component';

describe('PecrLoteAnimalComponent', () => {
  let component: PecrLoteAnimalComponent;
  let fixture: ComponentFixture<PecrLoteAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrLoteAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrLoteAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
