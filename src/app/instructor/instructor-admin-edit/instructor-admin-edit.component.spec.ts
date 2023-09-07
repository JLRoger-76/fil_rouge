import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAdminEditComponent } from './instructor-admin-edit.component';

describe('InstructorAdminEditComponent', () => {
  let component: InstructorAdminEditComponent;
  let fixture: ComponentFixture<InstructorAdminEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstructorAdminEditComponent]
    });
    fixture = TestBed.createComponent(InstructorAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
