import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SystemNavbarComponent } from "./system-navbar.component";

describe("SystemNavbarComponent", () => {
  let component: SystemNavbarComponent;
  let fixture: ComponentFixture<SystemNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemNavbarComponent],
    });
    fixture = TestBed.createComponent(SystemNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
