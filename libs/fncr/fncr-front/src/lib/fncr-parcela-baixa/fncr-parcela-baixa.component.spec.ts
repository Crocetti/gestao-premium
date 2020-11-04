import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrParcelaBaixaComponent } from './fncr-parcela-baixa.component';

describe('FncrParcelaBaixaComponent', () => {
  let component: FncrParcelaBaixaComponent;
  let fixture: ComponentFixture<FncrParcelaBaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrParcelaBaixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrParcelaBaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
