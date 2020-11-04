import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrParcelaComponent } from './fncr-parcela.component';

describe('FncrParcelaComponent', () => {
  let component: FncrParcelaComponent;
  let fixture: ComponentFixture<FncrParcelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrParcelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrParcelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
