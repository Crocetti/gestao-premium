import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstClasseProdutoEditComponent } from './cdst-classe-produto-edit.component';

describe('CdstClasseProdutoEditComponent', () => {
  let component: CdstClasseProdutoEditComponent;
  let fixture: ComponentFixture<CdstClasseProdutoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstClasseProdutoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstClasseProdutoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
