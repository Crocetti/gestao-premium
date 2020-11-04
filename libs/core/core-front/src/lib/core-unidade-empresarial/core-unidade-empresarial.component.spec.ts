import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreUnidadeEmpresarialComponent } from './core-unidade-empresarial.component';

describe('CoreUnidadeEmpresarialComponent', () => {
  let component: CoreUnidadeEmpresarialComponent;
  let fixture: ComponentFixture<CoreUnidadeEmpresarialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreUnidadeEmpresarialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreUnidadeEmpresarialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
