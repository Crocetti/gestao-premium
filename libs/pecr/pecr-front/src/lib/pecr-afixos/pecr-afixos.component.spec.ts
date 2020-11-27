import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrAfixosComponent } from './pecr-afixos.component';

describe('PecrAfixosComponent', () => {
  let component: PecrAfixosComponent;
  let fixture: ComponentFixture<PecrAfixosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrAfixosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrAfixosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
