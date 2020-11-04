import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqCapaMovimentoComponent } from './estq-capa-movimento.component';

describe('EstqCapaMovimentoComponent', () => {
  let component: EstqCapaMovimentoComponent;
  let fixture: ComponentFixture<EstqCapaMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqCapaMovimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqCapaMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
