import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrDadosAbczComponent } from './pecr-dados-abcz.component';

describe('PecrDadosAbczComponent', () => {
  let component: PecrDadosAbczComponent;
  let fixture: ComponentFixture<PecrDadosAbczComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrDadosAbczComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrDadosAbczComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
