import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqLoteValidadeComponent } from './estq-lote-validade.component';

describe('EstqLoteValidadeComponent', () => {
  let component: EstqLoteValidadeComponent;
  let fixture: ComponentFixture<EstqLoteValidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqLoteValidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqLoteValidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
