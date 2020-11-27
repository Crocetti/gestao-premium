import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrHistoricoCoberturaComponent } from './pecr-historico-cobertura.component';

describe('PecrHistoricoCoberturaComponent', () => {
  let component: PecrHistoricoCoberturaComponent;
  let fixture: ComponentFixture<PecrHistoricoCoberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrHistoricoCoberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrHistoricoCoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
