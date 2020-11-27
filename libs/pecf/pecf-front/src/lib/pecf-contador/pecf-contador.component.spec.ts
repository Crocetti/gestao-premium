import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecfContadorComponent } from './pecf-contador.component';

describe('PecfContadorComponent', () => {
  let component: PecfContadorComponent;
  let fixture: ComponentFixture<PecfContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecfContadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecfContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
