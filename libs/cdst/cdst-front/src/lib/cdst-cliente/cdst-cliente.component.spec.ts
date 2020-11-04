import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstClienteComponent } from './cdst-cliente.component';

describe('CdstClienteComponent', () => {
  let component: CdstClienteComponent;
  let fixture: ComponentFixture<CdstClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
