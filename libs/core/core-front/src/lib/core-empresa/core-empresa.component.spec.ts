import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreEmpresaComponent } from './core-empresa.component';

describe('CoreEmpresaComponent', () => {
  let component: CoreEmpresaComponent;
  let fixture: ComponentFixture<CoreEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
