import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersEditComponent } from './admin-users-edit.component';

describe('AdminUsersEditComponent', () => {
  let component: AdminUsersEditComponent;
  let fixture: ComponentFixture<AdminUsersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersEditComponent]
    });
    fixture = TestBed.createComponent(AdminUsersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
