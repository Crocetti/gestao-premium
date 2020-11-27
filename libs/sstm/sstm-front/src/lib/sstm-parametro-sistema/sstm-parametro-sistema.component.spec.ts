import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmParametroSistemaComponent } from './sstm-parametro-sistema.component';

describe('SstmParametroSistemaComponent', () => {
  let component: SstmParametroSistemaComponent;
  let fixture: ComponentFixture<SstmParametroSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmParametroSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmParametroSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
