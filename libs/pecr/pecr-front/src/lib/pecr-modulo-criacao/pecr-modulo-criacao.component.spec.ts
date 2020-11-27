import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrModuloCriacaoComponent } from './pecr-modulo-criacao.component';

describe('PecrModuloCriacaoComponent', () => {
  let component: PecrModuloCriacaoComponent;
  let fixture: ComponentFixture<PecrModuloCriacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrModuloCriacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrModuloCriacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
