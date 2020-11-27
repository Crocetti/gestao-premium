import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmSistemaversaoObjetoversaoComponent } from './sstm-sistemaversao-objetoversao.component';

describe('SstmSistemaversaoObjetoversaoComponent', () => {
  let component: SstmSistemaversaoObjetoversaoComponent;
  let fixture: ComponentFixture<SstmSistemaversaoObjetoversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmSistemaversaoObjetoversaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmSistemaversaoObjetoversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
