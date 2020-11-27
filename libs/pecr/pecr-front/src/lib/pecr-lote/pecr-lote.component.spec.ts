import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrLoteComponent } from './pecr-lote.component';

describe('PecrLoteComponent', () => {
  let component: PecrLoteComponent;
  let fixture: ComponentFixture<PecrLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrLoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
