import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  public isSelected(route: string) {
    return this.activatedRoute.snapshot.data["checkRoute"].includes(route);
  }
}
