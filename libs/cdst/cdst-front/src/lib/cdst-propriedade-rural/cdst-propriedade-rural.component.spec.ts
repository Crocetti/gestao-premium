import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstPropriedadeRuralComponent } from './cdst-propriedade-rural.component';

describe('CdstPropriedadeRuralComponent', () => {
  let component: CdstPropriedadeRuralComponent;
  let fixture: ComponentFixture<CdstPropriedadeRuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstPropriedadeRuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstPropriedadeRuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
