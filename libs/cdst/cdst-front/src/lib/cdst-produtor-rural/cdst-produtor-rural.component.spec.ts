import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstProdutorRuralComponent } from './cdst-produtor-rural.component';

describe('CdstProdutorRuralComponent', () => {
  let component: CdstProdutorRuralComponent;
  let fixture: ComponentFixture<CdstProdutorRuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstProdutorRuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstProdutorRuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
