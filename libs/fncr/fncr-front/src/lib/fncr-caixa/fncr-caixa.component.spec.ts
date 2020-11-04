import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrCaixaComponent } from './fncr-caixa.component';

describe('FncrCaixaComponent', () => {
  let component: FncrCaixaComponent;
  let fixture: ComponentFixture<FncrCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrCaixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
