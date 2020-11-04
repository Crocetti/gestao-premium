import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclCstComponent } from './fscl-cst.component';

describe('FsclCstComponent', () => {
  let component: FsclCstComponent;
  let fixture: ComponentFixture<FsclCstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclCstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclCstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
