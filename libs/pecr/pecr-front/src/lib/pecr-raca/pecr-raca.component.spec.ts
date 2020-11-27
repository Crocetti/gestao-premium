import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrRacaComponent } from './pecr-raca.component';

describe('PecrRacaComponent', () => {
  let component: PecrRacaComponent;
  let fixture: ComponentFixture<PecrRacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrRacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
