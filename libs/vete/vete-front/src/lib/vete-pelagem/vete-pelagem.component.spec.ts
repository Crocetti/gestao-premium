import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetePelagemComponent } from './vete-pelagem.component';

describe('VetePelagemComponent', () => {
  let component: VetePelagemComponent;
  let fixture: ComponentFixture<VetePelagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetePelagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetePelagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
