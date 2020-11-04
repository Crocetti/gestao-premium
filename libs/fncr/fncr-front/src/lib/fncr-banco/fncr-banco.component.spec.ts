import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrBancoComponent } from './fncr-banco.component';

describe('FncrBancoComponent', () => {
  let component: FncrBancoComponent;
  let fixture: ComponentFixture<FncrBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrBancoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
