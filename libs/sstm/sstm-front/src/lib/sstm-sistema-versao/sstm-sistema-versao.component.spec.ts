import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmSistemaVersaoComponent } from './sstm-sistema-versao.component';

describe('SstmSistemaVersaoComponent', () => {
  let component: SstmSistemaVersaoComponent;
  let fixture: ComponentFixture<SstmSistemaVersaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmSistemaVersaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmSistemaVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
