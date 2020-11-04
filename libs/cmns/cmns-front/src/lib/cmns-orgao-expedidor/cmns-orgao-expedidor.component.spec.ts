import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmnsOrgaoExpedidorComponent } from './cmns-orgao-expedidor.component';

describe('CmnsOrgaoExpedidorComponent', () => {
  let component: CmnsOrgaoExpedidorComponent;
  let fixture: ComponentFixture<CmnsOrgaoExpedidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmnsOrgaoExpedidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmnsOrgaoExpedidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
