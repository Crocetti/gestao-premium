import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsLocalidadeComponent } from './cmns-localidade.component';

describe('CmnsLocalidadeComponent', () => {
  let component: CmnsLocalidadeComponent;
  let fixture: ComponentFixture<CmnsLocalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsLocalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsLocalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
