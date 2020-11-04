import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsCargoComponent } from './cmns-cargo.component';

describe('CmnsCargoComponent', () => {
  let component: CmnsCargoComponent;
  let fixture: ComponentFixture<CmnsCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsCargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
