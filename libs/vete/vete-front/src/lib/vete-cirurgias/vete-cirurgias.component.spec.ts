import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteCirurgiasComponent } from './vete-cirurgias.component';

describe('VeteCirurgiasComponent', () => {
  let component: VeteCirurgiasComponent;
  let fixture: ComponentFixture<VeteCirurgiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteCirurgiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteCirurgiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
