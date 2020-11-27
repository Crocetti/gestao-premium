import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PecfAliquotaComponent } from './pecf-aliquota.component';

describe('PecfAliquotaComponent', () => {
  let component: PecfAliquotaComponent;
  let fixture: ComponentFixture<PecfAliquotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PecfAliquotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PecfAliquotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
