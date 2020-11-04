import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclDocumentoComponent } from './fscl-documento.component';

describe('FsclDocumentoComponent', () => {
  let component: FsclDocumentoComponent;
  let fixture: ComponentFixture<FsclDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclDocumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
