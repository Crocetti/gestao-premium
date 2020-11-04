import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrNivelPlanoContaComponent } from './fncr-nivel-plano-conta.component';

describe('FncrNivelPlanoContaComponent', () => {
  let component: FncrNivelPlanoContaComponent;
  let fixture: ComponentFixture<FncrNivelPlanoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrNivelPlanoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrNivelPlanoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
