import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstProdutorPropriedadeComponent } from './cdst-produtor-propriedade.component';

describe('CdstProdutorPropriedadeComponent', () => {
  let component: CdstProdutorPropriedadeComponent;
  let fixture: ComponentFixture<CdstProdutorPropriedadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstProdutorPropriedadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstProdutorPropriedadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
