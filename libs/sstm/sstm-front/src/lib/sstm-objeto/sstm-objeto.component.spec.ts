import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmObjetoComponent } from './sstm-objeto.component';

describe('SstmObjetoComponent', () => {
  let component: SstmObjetoComponent;
  let fixture: ComponentFixture<SstmObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmObjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
