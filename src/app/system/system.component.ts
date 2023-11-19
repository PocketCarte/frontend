import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SystemAuthService } from "./shared/services/system-auth.service";

@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.scss"],
})
export class SystemComponent {
  constructor(private title: Title) {
    this.title.setTitle("PocketCarte");
  }
}
