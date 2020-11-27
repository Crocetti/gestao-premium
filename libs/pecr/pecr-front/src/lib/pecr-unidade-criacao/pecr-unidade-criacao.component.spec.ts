import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrUnidadeCriacaoComponent } from './pecr-unidade-criacao.component';

describe('PecrUnidadeCriacaoComponent', () => {
  let component: PecrUnidadeCriacaoComponent;
  let fixture: ComponentFixture<PecrUnidadeCriacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrUnidadeCriacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrUnidadeCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
