import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclCfopComponent } from './fscl-cfop.component';

describe('FsclCfopComponent', () => {
  let component: FsclCfopComponent;
  let fixture: ComponentFixture<FsclCfopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclCfopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclCfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
