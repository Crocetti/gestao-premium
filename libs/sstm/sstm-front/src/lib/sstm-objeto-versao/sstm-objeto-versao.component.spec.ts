import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmObjetoVersaoComponent } from './sstm-objeto-versao.component';

describe('SstmObjetoVersaoComponent', () => {
  let component: SstmObjetoVersaoComponent;
  let fixture: ComponentFixture<SstmObjetoVersaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmObjetoVersaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmObjetoVersaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
