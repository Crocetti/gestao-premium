import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmScriptsComponent } from './sstm-scripts.component';

describe('SstmScriptsComponent', () => {
  let component: SstmScriptsComponent;
  let fixture: ComponentFixture<SstmScriptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmScriptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmScriptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
