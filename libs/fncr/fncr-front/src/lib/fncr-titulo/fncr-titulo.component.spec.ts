import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrTituloComponent } from './fncr-titulo.component';

describe('FncrTituloComponent', () => {
  let component: FncrTituloComponent;
  let fixture: ComponentFixture<FncrTituloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrTituloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
