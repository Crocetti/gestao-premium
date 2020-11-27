import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdstClasseProdutoSurveyComponent } from './cdst-classe-produto-survey.component';

describe('CdstClasseProdutoSurveyComponent', () => {
  let component: CdstClasseProdutoSurveyComponent;
  let fixture: ComponentFixture<CdstClasseProdutoSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdstClasseProdutoSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdstClasseProdutoSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
