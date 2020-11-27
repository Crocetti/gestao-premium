import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmSistemaCorporacaoComponent } from './sstm-sistema-corporacao.component';

describe('SstmSistemaCorporacaoComponent', () => {
  let component: SstmSistemaCorporacaoComponent;
  let fixture: ComponentFixture<SstmSistemaCorporacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmSistemaCorporacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmSistemaCorporacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
