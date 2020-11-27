import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmSistemaComponent } from './sstm-sistema.component';

describe('SstmSistemaComponent', () => {
  let component: SstmSistemaComponent;
  let fixture: ComponentFixture<SstmSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
