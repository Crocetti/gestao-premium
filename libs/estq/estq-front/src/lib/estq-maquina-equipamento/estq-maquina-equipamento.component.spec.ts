import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqMaquinaEquipamentoComponent } from './estq-maquina-equipamento.component';

describe('EstqMaquinaEquipamentoComponent', () => {
  let component: EstqMaquinaEquipamentoComponent;
  let fixture: ComponentFixture<EstqMaquinaEquipamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqMaquinaEquipamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqMaquinaEquipamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
