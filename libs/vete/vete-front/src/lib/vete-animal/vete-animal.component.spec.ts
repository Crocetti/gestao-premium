import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteAnimalComponent } from './vete-animal.component';

describe('VeteAnimalComponent', () => {
  let component: VeteAnimalComponent;
  let fixture: ComponentFixture<VeteAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
