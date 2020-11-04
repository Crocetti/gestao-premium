import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqNumeroDocumentoComponent } from './estq-numero-documento.component';

describe('EstqNumeroDocumentoComponent', () => {
  let component: EstqNumeroDocumentoComponent;
  let fixture: ComponentFixture<EstqNumeroDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqNumeroDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqNumeroDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
