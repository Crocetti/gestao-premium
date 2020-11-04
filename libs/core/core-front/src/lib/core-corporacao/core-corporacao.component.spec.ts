import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCorporacaoComponent } from './core-corporacao.component';

describe('CoreCorporacaoComponent', () => {
  let component: CoreCorporacaoComponent;
  let fixture: ComponentFixture<CoreCorporacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreCorporacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCorporacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
