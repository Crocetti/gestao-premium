import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrTabelaPrecoComponent } from './fncr-tabela-preco.component';

describe('FncrTabelaPrecoComponent', () => {
  let component: FncrTabelaPrecoComponent;
  let fixture: ComponentFixture<FncrTabelaPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrTabelaPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrTabelaPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
