import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionAdminComponent } from './session-admin.component';

describe('SessionAdminComponent', () => {
  let component: SessionAdminComponent;
  let fixture: ComponentFixture<SessionAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionAdminComponent]
    });
    fixture = TestBed.createComponent(SessionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
