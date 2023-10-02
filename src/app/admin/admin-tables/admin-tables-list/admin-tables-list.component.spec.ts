import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablesListComponent } from './admin-tables-list.component';

describe('AdminTablesListComponent', () => {
  let component: AdminTablesListComponent;
  let fixture: ComponentFixture<AdminTablesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTablesListComponent]
    });
    fixture = TestBed.createComponent(AdminTablesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
