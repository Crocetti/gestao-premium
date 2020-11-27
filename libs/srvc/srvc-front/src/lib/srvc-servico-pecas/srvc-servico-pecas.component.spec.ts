import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvcServicoPecasComponent } from './srvc-servico-pecas.component';

describe('SrvcServicoPecasComponent', () => {
  let component: SrvcServicoPecasComponent;
  let fixture: ComponentFixture<SrvcServicoPecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SrvcServicoPecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvcServicoPecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
