import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsclDocumentoPessoaComponent } from './fscl-documento-pessoa.component';

describe('FsclDocumentoPessoaComponent', () => {
  let component: FsclDocumentoPessoaComponent;
  let fixture: ComponentFixture<FsclDocumentoPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FsclDocumentoPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FsclDocumentoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
