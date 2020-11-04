import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsRamoAtividadeComponent } from './cmns-ramo-atividade.component';

describe('CmnsRamoAtividadeComponent', () => {
  let component: CmnsRamoAtividadeComponent;
  let fixture: ComponentFixture<CmnsRamoAtividadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsRamoAtividadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsRamoAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
