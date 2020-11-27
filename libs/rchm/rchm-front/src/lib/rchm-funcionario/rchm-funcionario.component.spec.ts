import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RchmFuncionarioComponent } from './rchm-funcionario.component';

describe('RchmFuncionarioComponent', () => {
  let component: RchmFuncionarioComponent;
  let fixture: ComponentFixture<RchmFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RchmFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RchmFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
