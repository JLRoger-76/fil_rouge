import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAdminEditComponent } from './formation-admin-edit.component';

describe('FormationAdminEditComponent', () => {
  let component: FormationAdminEditComponent;
  let fixture: ComponentFixture<FormationAdminEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationAdminEditComponent]
    });
    fixture = TestBed.createComponent(FormationAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
