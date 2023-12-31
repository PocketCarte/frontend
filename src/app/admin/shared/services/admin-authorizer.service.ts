import { Injectable } from "@angular/core";
import { AdminPermissions } from "../types/admin-permissions";
import { AdminUserService } from "./admin-user.service";

@Injectable({
  providedIn: "root",
})
export class AdminAuthorizerService {
  private authorizer: any = {
    "/admin/dashboard": AdminPermissions.Cozinha,
    "/admin/orders": AdminPermissions.Cozinha,
    "/admin/categories": AdminPermissions.Gerente,
    "/admin/products": AdminPermissions.Gerente,
    "/admin/tables": AdminPermissions.Garcom,
    "/admin/users": AdminPermissions.Administrador,
  };

  constructor(private adminUserService: AdminUserService) {}

  public hasRoutePermission(route: string) {
    if (!this.adminUserService.loaded) {
      return false;
    }
    return (
      (this.adminUserService.user &&
        this.adminUserService.user.permission <= this.authorizer[route]) ??
      false
    );
  }
}
