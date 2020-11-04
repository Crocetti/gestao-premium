import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstTransportadoraComponent } from './cdst-transportadora.component';

describe('CdstTransportadoraComponent', () => {
  let component: CdstTransportadoraComponent;
  let fixture: ComponentFixture<CdstTransportadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstTransportadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstTransportadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
