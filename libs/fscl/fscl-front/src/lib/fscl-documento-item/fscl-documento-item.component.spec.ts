import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclDocumentoItemComponent } from './fscl-documento-item.component';

describe('FsclDocumentoItemComponent', () => {
  let component: FsclDocumentoItemComponent;
  let fixture: ComponentFixture<FsclDocumentoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclDocumentoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclDocumentoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
