import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmParametroUsuarioComponent } from './sstm-parametro-usuario.component';

describe('SstmParametroUsuarioComponent', () => {
  let component: SstmParametroUsuarioComponent;
  let fixture: ComponentFixture<SstmParametroUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmParametroUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmParametroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
