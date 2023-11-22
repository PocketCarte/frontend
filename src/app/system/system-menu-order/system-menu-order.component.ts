import { Component, OnInit } from "@angular/core";
import { SystemModalService } from "../shared/services/system-modal.service";

@Component({
  selector: "app-system-menu-order",
  templateUrl: "./system-menu-order.component.html",
  styleUrls: ["./system-menu-order.component.scss"],
})
export class SystemMenuOrderComponent implements OnInit {
  constructor(public systemModalService: SystemModalService) {}

  public ngOnInit(): void {
    console.log(this.systemModalService.data);
  }
}
