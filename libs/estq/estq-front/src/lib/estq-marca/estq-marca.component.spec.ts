import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqMarcaComponent } from './estq-marca.component';

describe('EstqMarcaComponent', () => {
  let component: EstqMarcaComponent;
  let fixture: ComponentFixture<EstqMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqMarcaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
