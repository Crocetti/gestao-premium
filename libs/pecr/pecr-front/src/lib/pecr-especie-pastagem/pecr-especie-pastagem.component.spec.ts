import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecrEspeciePastagemComponent } from './pecr-especie-pastagem.component';

describe('PecrEspeciePastagemComponent', () => {
  let component: PecrEspeciePastagemComponent;
  let fixture: ComponentFixture<PecrEspeciePastagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecrEspeciePastagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecrEspeciePastagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
