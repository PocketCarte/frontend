import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { AdminUserService } from "./shared/services/admin-user.service";
import { AdminWaiterService } from "./shared/services/admin-waiter.service";
import { AdminPermissions } from "./shared/types/admin-permissions";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private title: Title,
    private adminUserService: AdminUserService,
    private adminWaiterService: AdminWaiterService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.title.setTitle("PocketCarte | Administrativo");
    this.adminUserService.loadUser();
  }

  public async ngOnInit(): Promise<void> {
    const user = await this.adminUserService.loadUser();
    if (Number(user.permission) === AdminPermissions.Garcom) {
      this.adminWaiterService.listenWaiterMessages();
    }
  }
}
