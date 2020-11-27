import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrHistoricoPesagemComponent } from './pecr-historico-pesagem.component';

describe('PecrHistoricoPesagemComponent', () => {
  let component: PecrHistoricoPesagemComponent;
  let fixture: ComponentFixture<PecrHistoricoPesagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrHistoricoPesagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrHistoricoPesagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
