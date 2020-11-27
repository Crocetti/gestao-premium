import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrGanhoPesoComponent } from './pecr-ganho-peso.component';

describe('PecrGanhoPesoComponent', () => {
  let component: PecrGanhoPesoComponent;
  let fixture: ComponentFixture<PecrGanhoPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrGanhoPesoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrGanhoPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
