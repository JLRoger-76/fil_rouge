import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAdminEditComponent } from './skill-admin-edit.component';

describe('SkillAdminEditComponent', () => {
  let component: SkillAdminEditComponent;
  let fixture: ComponentFixture<SkillAdminEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillAdminEditComponent]
    });
    fixture = TestBed.createComponent(SkillAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
