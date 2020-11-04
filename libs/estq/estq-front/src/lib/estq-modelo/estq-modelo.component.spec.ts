import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqModeloComponent } from './estq-modelo.component';

describe('EstqModeloComponent', () => {
  let component: EstqModeloComponent;
  let fixture: ComponentFixture<EstqModeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqModeloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
