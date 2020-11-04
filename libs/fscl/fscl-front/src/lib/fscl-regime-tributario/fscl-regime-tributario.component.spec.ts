import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclRegimeTributarioComponent } from './fscl-regime-tributario.component';

describe('FsclRegimeTributarioComponent', () => {
  let component: FsclRegimeTributarioComponent;
  let fixture: ComponentFixture<FsclRegimeTributarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclRegimeTributarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclRegimeTributarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
