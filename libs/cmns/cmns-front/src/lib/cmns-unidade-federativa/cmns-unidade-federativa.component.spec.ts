import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsUnidadeFederativaComponent } from './cmns-unidade-federativa.component';

describe('CmnsUnidadeFederativaComponent', () => {
  let component: CmnsUnidadeFederativaComponent;
  let fixture: ComponentFixture<CmnsUnidadeFederativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsUnidadeFederativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsUnidadeFederativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
