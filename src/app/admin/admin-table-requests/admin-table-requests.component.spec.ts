import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminTableRequestsComponent } from "./admin-table-requests.component";

describe("AdminTableRequestsComponent", () => {
  let component: AdminTableRequestsComponent;
  let fixture: ComponentFixture<AdminTableRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTableRequestsComponent],
    });
    fixture = TestBed.createComponent(AdminTableRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
