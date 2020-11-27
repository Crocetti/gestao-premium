import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecfCaixaComponent } from './pecf-caixa.component';

describe('PecfCaixaComponent', () => {
  let component: PecfCaixaComponent;
  let fixture: ComponentFixture<PecfCaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecfCaixaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecfCaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
