import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteServicoComposicaoComponent } from './vete-servico-composicao.component';

describe('VeteServicoComposicaoComponent', () => {
  let component: VeteServicoComposicaoComponent;
  let fixture: ComponentFixture<VeteServicoComposicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteServicoComposicaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteServicoComposicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
