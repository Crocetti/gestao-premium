import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrHistoricoCategoriaComponent } from './pecr-historico-categoria.component';

describe('PecrHistoricoCategoriaComponent', () => {
  let component: PecrHistoricoCategoriaComponent;
  let fixture: ComponentFixture<PecrHistoricoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrHistoricoCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrHistoricoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
