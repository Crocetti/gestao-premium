import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrAptidaoComponent } from './pecr-aptidao.component';

describe('PecrAptidaoComponent', () => {
  let component: PecrAptidaoComponent;
  let fixture: ComponentFixture<PecrAptidaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrAptidaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrAptidaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
