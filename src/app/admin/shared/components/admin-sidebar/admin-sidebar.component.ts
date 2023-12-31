import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AdminAuthorizerService } from "../../services/admin-authorizer.service";
import { AdminUserService } from "../../services/admin-user.service";
import { AdminUser } from "../../types/admin-user";
import { AdminSidebarService } from "../../services/admin-sidebar.service";

export interface SidebarItem {
  route: string;
  icon: string;
  label: string;
}

@Component({
  selector: "app-admin-sidebar",
  templateUrl: "./admin-sidebar.component.html",
  styleUrls: ["./admin-sidebar.component.scss"],
})
export class AdminSidebarComponent implements OnInit {
  @ViewChild("sidebar") sidebar!: ElementRef;

  public status = false;
  public user!: AdminUser;
  public sidebarItems: SidebarItem[] = [
    {
      route: "/admin/dashboard",
      icon: "bi-bar-chart-fill",
      label: "Dashboard",
    },
    {
      route: "/admin/orders",
      icon: "bi-cart-fill",
      label: "Pedidos",
    },
    {
      route: "/admin/categories",
      icon: "bi-bookmarks-fill",
      label: "Categorias",
    },
    {
      route: "/admin/products",
      icon: "bi-archive-fill",
      label: "Produtos",
    },
    {
      route: "/admin/tables",
      icon: "bi-qr-code",
      label: "Mesas",
    },
    {
      route: "/admin/users",
      icon: "bi-person-fill-gear",
      label: "Usuários",
    },
  ];

  constructor(
    private route: ActivatedRoute,
    public adminAuthorizerService: AdminAuthorizerService,
    public adminSidebarService: AdminSidebarService,
    public adminUserService: AdminUserService,
  ) {
    this.adminUserService.loadUser();
  }

  public async ngOnInit(): Promise<void> {
    this.adminSidebarService.status$.subscribe((result) => {
      this.status = result;
    });
    this.user = await this.adminUserService.loadUser();
  }

  public isSelected(route: string) {
    return this.route.snapshot.data["checkRoute"].includes(route);
  }
}
