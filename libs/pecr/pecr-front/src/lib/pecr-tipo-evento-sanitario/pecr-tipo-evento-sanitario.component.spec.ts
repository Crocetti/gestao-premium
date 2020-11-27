import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrTipoEventoSanitarioComponent } from './pecr-tipo-evento-sanitario.component';

describe('PecrTipoEventoSanitarioComponent', () => {
  let component: PecrTipoEventoSanitarioComponent;
  let fixture: ComponentFixture<PecrTipoEventoSanitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrTipoEventoSanitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrTipoEventoSanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
