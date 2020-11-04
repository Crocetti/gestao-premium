import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrFormaVencimentoComponent } from './fncr-forma-vencimento.component';

describe('FncrFormaVencimentoComponent', () => {
  let component: FncrFormaVencimentoComponent;
  let fixture: ComponentFixture<FncrFormaVencimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrFormaVencimentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrFormaVencimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
