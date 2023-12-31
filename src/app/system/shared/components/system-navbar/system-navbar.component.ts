import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SystemAuthService } from "../../services/system-auth.service";

@Component({
  selector: "app-system-navbar",
  templateUrl: "./system-navbar.component.html",
  styleUrls: ["./system-navbar.component.scss"],
})
export class SystemNavbarComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    public systemAuthService: SystemAuthService,
  ) {}

  public isSelected(route: string) {
    return this.activatedRoute.snapshot.data["checkRoute"].includes(route);
  }
}
