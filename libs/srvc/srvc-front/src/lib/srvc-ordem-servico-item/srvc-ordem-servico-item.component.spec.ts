import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvcOrdemServicoItemComponent } from './srvc-ordem-servico-item.component';

describe('SrvcOrdemServicoItemComponent', () => {
  let component: SrvcOrdemServicoItemComponent;
  let fixture: ComponentFixture<SrvcOrdemServicoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvcOrdemServicoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvcOrdemServicoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
