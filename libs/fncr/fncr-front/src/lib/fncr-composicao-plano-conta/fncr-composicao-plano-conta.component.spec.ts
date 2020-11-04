import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrComposicaoPlanoContaComponent } from './fncr-composicao-plano-conta.component';

describe('FncrComposicaoPlanoContaComponent', () => {
  let component: FncrComposicaoPlanoContaComponent;
  let fixture: ComponentFixture<FncrComposicaoPlanoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrComposicaoPlanoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrComposicaoPlanoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
