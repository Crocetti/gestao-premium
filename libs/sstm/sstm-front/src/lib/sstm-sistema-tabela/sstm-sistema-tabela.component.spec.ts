import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmSistemaTabelaComponent } from './sstm-sistema-tabela.component';

describe('SstmSistemaTabelaComponent', () => {
  let component: SstmSistemaTabelaComponent;
  let fixture: ComponentFixture<SstmSistemaTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmSistemaTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmSistemaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
