import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SstmDatabaseComponent } from './sstm-database.component';

describe('SstmDatabaseComponent', () => {
  let component: SstmDatabaseComponent;
  let fixture: ComponentFixture<SstmDatabaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SstmDatabaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SstmDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
