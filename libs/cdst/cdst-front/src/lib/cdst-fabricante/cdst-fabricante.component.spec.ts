import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstFabricanteComponent } from './cdst-fabricante.component';

describe('CdstFabricanteComponent', () => {
  let component: CdstFabricanteComponent;
  let fixture: ComponentFixture<CdstFabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstFabricanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstFabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
