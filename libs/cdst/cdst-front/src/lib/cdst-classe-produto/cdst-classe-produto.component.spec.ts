import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstClasseProdutoComponent } from './cdst-classe-produto.component';

describe('CdstClasseProdutoComponent', () => {
  let component: CdstClasseProdutoComponent;
  let fixture: ComponentFixture<CdstClasseProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstClasseProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstClasseProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
