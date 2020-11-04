import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FncrPlanoOrcamentarioComponent } from './fncr-plano-orcamentario.component';

describe('FncrPlanoOrcamentarioComponent', () => {
  let component: FncrPlanoOrcamentarioComponent;
  let fixture: ComponentFixture<FncrPlanoOrcamentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FncrPlanoOrcamentarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FncrPlanoOrcamentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
