import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvcServicoComponent } from './srvc-servico.component';

describe('SrvcServicoComponent', () => {
  let component: SrvcServicoComponent;
  let fixture: ComponentFixture<SrvcServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvcServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvcServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
