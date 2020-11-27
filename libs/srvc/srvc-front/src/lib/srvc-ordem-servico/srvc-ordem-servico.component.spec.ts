import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvcOrdemServicoComponent } from './srvc-ordem-servico.component';

describe('SrvcOrdemServicoComponent', () => {
  let component: SrvcOrdemServicoComponent;
  let fixture: ComponentFixture<SrvcOrdemServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvcOrdemServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvcOrdemServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
