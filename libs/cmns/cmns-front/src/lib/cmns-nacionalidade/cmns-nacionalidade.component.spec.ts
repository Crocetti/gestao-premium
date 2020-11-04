import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsNacionalidadeComponent } from './cmns-nacionalidade.component';

describe('CmnsNacionalidadeComponent', () => {
  let component: CmnsNacionalidadeComponent;
  let fixture: ComponentFixture<CmnsNacionalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsNacionalidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsNacionalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
