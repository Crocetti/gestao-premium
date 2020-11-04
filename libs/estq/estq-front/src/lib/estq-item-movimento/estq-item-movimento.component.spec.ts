import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqItemMovimentoComponent } from './estq-item-movimento.component';

describe('EstqItemMovimentoComponent', () => {
  let component: EstqItemMovimentoComponent;
  let fixture: ComponentFixture<EstqItemMovimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqItemMovimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqItemMovimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
