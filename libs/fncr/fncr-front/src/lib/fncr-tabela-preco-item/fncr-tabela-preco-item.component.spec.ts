import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrTabelaPrecoItemComponent } from './fncr-tabela-preco-item.component';

describe('FncrTabelaPrecoItemComponent', () => {
  let component: FncrTabelaPrecoItemComponent;
  let fixture: ComponentFixture<FncrTabelaPrecoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrTabelaPrecoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrTabelaPrecoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
