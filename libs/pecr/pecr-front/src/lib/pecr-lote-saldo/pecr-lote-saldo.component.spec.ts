import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrLoteSaldoComponent } from './pecr-lote-saldo.component';

describe('PecrLoteSaldoComponent', () => {
  let component: PecrLoteSaldoComponent;
  let fixture: ComponentFixture<PecrLoteSaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrLoteSaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrLoteSaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
