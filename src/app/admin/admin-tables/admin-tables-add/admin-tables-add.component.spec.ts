import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablesAddComponent } from './admin-tables-add.component';

describe('AdminTablesAddComponent', () => {
  let component: AdminTablesAddComponent;
  let fixture: ComponentFixture<AdminTablesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTablesAddComponent]
    });
    fixture = TestBed.createComponent(AdminTablesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
