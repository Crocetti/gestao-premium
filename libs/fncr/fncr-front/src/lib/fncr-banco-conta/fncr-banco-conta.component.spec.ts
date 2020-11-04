import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrBancoContaComponent } from './fncr-banco-conta.component';

describe('FncrBancoContaComponent', () => {
  let component: FncrBancoContaComponent;
  let fixture: ComponentFixture<FncrBancoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrBancoContaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrBancoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
