import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsPaisComponent } from './cmns-pais.component';

describe('CmnsPaisComponent', () => {
  let component: CmnsPaisComponent;
  let fixture: ComponentFixture<CmnsPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
