import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecfConfiguracaoComponent } from './pecf-configuracao.component';

describe('PecfConfiguracaoComponent', () => {
  let component: PecfConfiguracaoComponent;
  let fixture: ComponentFixture<PecfConfiguracaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecfConfiguracaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecfConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
