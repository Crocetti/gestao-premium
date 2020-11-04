import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsBairroComponent } from './cmns-bairro.component';

describe('CmnsBairroComponent', () => {
  let component: CmnsBairroComponent;
  let fixture: ComponentFixture<CmnsBairroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsBairroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsBairroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
