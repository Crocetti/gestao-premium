import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteServicoComponent } from './vete-servico.component';

describe('VeteServicoComponent', () => {
  let component: VeteServicoComponent;
  let fixture: ComponentFixture<VeteServicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteServicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteServicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
