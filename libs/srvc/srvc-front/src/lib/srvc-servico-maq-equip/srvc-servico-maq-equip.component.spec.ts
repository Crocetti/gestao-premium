import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvcServicoMaqEquipComponent } from './srvc-servico-maq-equip.component';

describe('SrvcServicoMaqEquipComponent', () => {
  let component: SrvcServicoMaqEquipComponent;
  let fixture: ComponentFixture<SrvcServicoMaqEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvcServicoMaqEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvcServicoMaqEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
