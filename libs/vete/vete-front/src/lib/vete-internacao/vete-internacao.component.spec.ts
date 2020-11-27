import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeteInternacaoComponent } from './vete-internacao.component';

describe('VeteInternacaoComponent', () => {
  let component: VeteInternacaoComponent;
  let fixture: ComponentFixture<VeteInternacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeteInternacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeteInternacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
