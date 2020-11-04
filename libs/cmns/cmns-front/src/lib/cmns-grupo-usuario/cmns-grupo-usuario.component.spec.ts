import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsGrupoUsuarioComponent } from './cmns-grupo-usuario.component';

describe('CmnsGrupoUsuarioComponent', () => {
  let component: CmnsGrupoUsuarioComponent;
  let fixture: ComponentFixture<CmnsGrupoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsGrupoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsGrupoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
