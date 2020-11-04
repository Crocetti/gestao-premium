import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclItemFatoFiscalComponent } from './fscl-item-fato-fiscal.component';

describe('FsclItemFatoFiscalComponent', () => {
  let component: FsclItemFatoFiscalComponent;
  let fixture: ComponentFixture<FsclItemFatoFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclItemFatoFiscalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclItemFatoFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
