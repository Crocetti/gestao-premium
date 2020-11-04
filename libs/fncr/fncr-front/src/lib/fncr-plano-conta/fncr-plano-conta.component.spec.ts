import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrPlanoContaComponent } from './fncr-plano-conta.component';

describe('FncrPlanoContaComponent', () => {
  let component: FncrPlanoContaComponent;
  let fixture: ComponentFixture<FncrPlanoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrPlanoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrPlanoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
