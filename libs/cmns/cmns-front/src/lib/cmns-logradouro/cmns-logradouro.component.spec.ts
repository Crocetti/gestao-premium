import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsLogradouroComponent } from './cmns-logradouro.component';

describe('CmnsLogradouroComponent', () => {
  let component: CmnsLogradouroComponent;
  let fixture: ComponentFixture<CmnsLogradouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsLogradouroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsLogradouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
