import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageNomenuComponent } from './main-page-nomenu.component';

describe('MainPageNomenuComponent', () => {
  let component: MainPageNomenuComponent;
  let fixture: ComponentFixture<MainPageNomenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageNomenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageNomenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
