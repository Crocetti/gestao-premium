import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreUnemUsuarioComponent } from './core-unem-usuario.component';

describe('CoreUnemUsuarioComponent', () => {
  let component: CoreUnemUsuarioComponent;
  let fixture: ComponentFixture<CoreUnemUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreUnemUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreUnemUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
