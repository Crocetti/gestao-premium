import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrCategoriaComponent } from './pecr-categoria.component';

describe('PecrCategoriaComponent', () => {
  let component: PecrCategoriaComponent;
  let fixture: ComponentFixture<PecrCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
