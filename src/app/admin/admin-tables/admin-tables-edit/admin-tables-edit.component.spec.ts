import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablesEditComponent } from './admin-tables-edit.component';

describe('AdminTablesEditComponent', () => {
  let component: AdminTablesEditComponent;
  let fixture: ComponentFixture<AdminTablesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTablesEditComponent]
    });
    fixture = TestBed.createComponent(AdminTablesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
