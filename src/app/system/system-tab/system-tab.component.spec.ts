import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SystemTabComponent } from "./system-tab.component";

describe("SystemTabComponent", () => {
  let component: SystemTabComponent;
  let fixture: ComponentFixture<SystemTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SystemTabComponent],
    });
    fixture = TestBed.createComponent(SystemTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
