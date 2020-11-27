import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrEventoSanitarioComponent } from './pecr-evento-sanitario.component';

describe('PecrEventoSanitarioComponent', () => {
  let component: PecrEventoSanitarioComponent;
  let fixture: ComponentFixture<PecrEventoSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrEventoSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrEventoSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
