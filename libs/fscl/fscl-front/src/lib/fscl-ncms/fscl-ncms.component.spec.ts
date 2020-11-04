import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclNcmsComponent } from './fscl-ncms.component';

describe('FsclNcmsComponent', () => {
  let component: FsclNcmsComponent;
  let fixture: ComponentFixture<FsclNcmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclNcmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclNcmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
