import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrdersKitchenComponent } from './admin-orders-kitchen.component';

describe('AdminOrdersKitchenComponent', () => {
  let component: AdminOrdersKitchenComponent;
  let fixture: ComponentFixture<AdminOrdersKitchenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrdersKitchenComponent]
    });
    fixture = TestBed.createComponent(AdminOrdersKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
