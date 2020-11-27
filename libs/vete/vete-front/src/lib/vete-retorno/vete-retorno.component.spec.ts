import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteRetornoComponent } from './vete-retorno.component';

describe('VeteRetornoComponent', () => {
  let component: VeteRetornoComponent;
  let fixture: ComponentFixture<VeteRetornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteRetornoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
