import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmParametroComponent } from './sstm-parametro.component';

describe('SstmParametroComponent', () => {
  let component: SstmParametroComponent;
  let fixture: ComponentFixture<SstmParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
