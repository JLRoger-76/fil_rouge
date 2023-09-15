import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationAdminSessionComponent } from './evaluation-admin-session.component';

describe('EvaluationAdminSessionComponent', () => {
  let component: EvaluationAdminSessionComponent;
  let fixture: ComponentFixture<EvaluationAdminSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvaluationAdminSessionComponent]
    });
    fixture = TestBed.createComponent(EvaluationAdminSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
