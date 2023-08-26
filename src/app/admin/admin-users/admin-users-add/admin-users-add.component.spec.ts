import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersAddComponent } from './admin-users-add.component';

describe('AdminUsersAddComponent', () => {
  let component: AdminUsersAddComponent;
  let fixture: ComponentFixture<AdminUsersAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUsersAddComponent]
    });
    fixture = TestBed.createComponent(AdminUsersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
