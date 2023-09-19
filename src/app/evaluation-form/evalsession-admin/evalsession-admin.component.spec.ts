import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalsessionAdminComponent } from './evalsession-admin.component';

describe('EvalsessionAdminComponent', () => {
  let component: EvalsessionAdminComponent;
  let fixture: ComponentFixture<EvalsessionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvalsessionAdminComponent]
    });
    fixture = TestBed.createComponent(EvalsessionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
