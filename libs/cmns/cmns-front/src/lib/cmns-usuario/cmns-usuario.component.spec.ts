import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsUsuarioComponent } from './cmns-usuario.component';

describe('CmnsUsuarioComponent', () => {
  let component: CmnsUsuarioComponent;
  let fixture: ComponentFixture<CmnsUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
