import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAdminEditComponent } from './session-admin-edit.component';

describe('SessionAdminEditComponent', () => {
  let component: SessionAdminEditComponent;
  let fixture: ComponentFixture<SessionAdminEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionAdminEditComponent]
    });
    fixture = TestBed.createComponent(SessionAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
