import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersEditComponent } from './admin-orders-edit.component';

describe('AdminOrdersEditComponent', () => {
  let component: AdminOrdersEditComponent;
  let fixture: ComponentFixture<AdminOrdersEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrdersEditComponent]
    });
    fixture = TestBed.createComponent(AdminOrdersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
