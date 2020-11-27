import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstClasseProdutoGridComponent } from './cdst-classe-produto-grid.component';

describe('CdstClasseProdutoGridComponent', () => {
  let component: CdstClasseProdutoGridComponent;
  let fixture: ComponentFixture<CdstClasseProdutoGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstClasseProdutoGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstClasseProdutoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
