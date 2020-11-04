import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrCaixaItemComponent } from './fncr-caixa-item.component';

describe('FncrCaixaItemComponent', () => {
  let component: FncrCaixaItemComponent;
  let fixture: ComponentFixture<FncrCaixaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrCaixaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrCaixaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
