import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqSubgrupoComponent } from './estq-subgrupo.component';

describe('EstqSubgrupoComponent', () => {
  let component: EstqSubgrupoComponent;
  let fixture: ComponentFixture<EstqSubgrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqSubgrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqSubgrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
