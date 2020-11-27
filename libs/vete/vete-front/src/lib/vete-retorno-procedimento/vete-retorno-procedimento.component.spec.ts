import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteRetornoProcedimentoComponent } from './vete-retorno-procedimento.component';

describe('VeteRetornoProcedimentoComponent', () => {
  let component: VeteRetornoProcedimentoComponent;
  let fixture: ComponentFixture<VeteRetornoProcedimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteRetornoProcedimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteRetornoProcedimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
