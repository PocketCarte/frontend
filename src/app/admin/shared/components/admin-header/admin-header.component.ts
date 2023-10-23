import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { AdminLoginService } from "../../services/admin-login.service";
import { AdminSidebarService } from "../../services/admin-sidebar.service";

@Component({
  selector: "app-admin-header",
  templateUrl: "./admin-header.component.html",
  styleUrls: ["./admin-header.component.scss"],
})
export class AdminHeaderComponent {
  @ViewChild("header") header!: ElementRef;

  userDropdown = false;

  constructor(
    public adminLoginService: AdminLoginService,
    public adminSidebarService: AdminSidebarService,
    private renderer: Renderer2,
  ) {
    this.renderer.listen("window", "click", (e: Event) => {
      if (!this.header.nativeElement.contains(e.target)) {
        this.userDropdown = false;
      }
    });
  }

  public toggleUserDropdown(): void {
    this.userDropdown = !this.userDropdown;
  }

  public toggleSidebar(): void {
    this.adminSidebarService.status = !this.adminSidebarService.status;
  }
}
