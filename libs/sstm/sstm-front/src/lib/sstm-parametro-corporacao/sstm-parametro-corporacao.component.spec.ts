import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmParametroCorporacaoComponent } from './sstm-parametro-corporacao.component';

describe('SstmParametroCorporacaoComponent', () => {
  let component: SstmParametroCorporacaoComponent;
  let fixture: ComponentFixture<SstmParametroCorporacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmParametroCorporacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmParametroCorporacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
