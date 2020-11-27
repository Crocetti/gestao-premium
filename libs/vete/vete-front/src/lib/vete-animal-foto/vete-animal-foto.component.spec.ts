import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteAnimalFotoComponent } from './vete-animal-foto.component';

describe('VeteAnimalFotoComponent', () => {
  let component: VeteAnimalFotoComponent;
  let fixture: ComponentFixture<VeteAnimalFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteAnimalFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteAnimalFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
