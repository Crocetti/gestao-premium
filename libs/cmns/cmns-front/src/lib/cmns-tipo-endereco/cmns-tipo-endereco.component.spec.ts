import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsTipoEnderecoComponent } from './cmns-tipo-endereco.component';

describe('CmnsTipoEnderecoComponent', () => {
  let component: CmnsTipoEnderecoComponent;
  let fixture: ComponentFixture<CmnsTipoEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsTipoEnderecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsTipoEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
