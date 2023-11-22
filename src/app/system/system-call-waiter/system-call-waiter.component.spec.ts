import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SystemCallWaiterComponent } from "./system-call-waiter.component";

describe("SystemCallWaiterComponent", () => {
  let component: SystemCallWaiterComponent;
  let fixture: ComponentFixture<SystemCallWaiterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemCallWaiterComponent],
    });
    fixture = TestBed.createComponent(SystemCallWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
