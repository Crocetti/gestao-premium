import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstqGrupoComponent } from './estq-grupo.component';

describe('EstqGrupoComponent', () => {
  let component: EstqGrupoComponent;
  let fixture: ComponentFixture<EstqGrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstqGrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstqGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
