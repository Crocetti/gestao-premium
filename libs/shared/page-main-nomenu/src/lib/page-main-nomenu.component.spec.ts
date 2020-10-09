import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainNomenuComponent } from './page-main-nomenu.component';

describe('PageMainNomenuComponent', () => {
  let component: PageMainNomenuComponent;
  let fixture: ComponentFixture<PageMainNomenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMainNomenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMainNomenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
