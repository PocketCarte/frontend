import { Injectable } from '@angular/core';
import { AdminPermissions } from '../types/admin-permissions';
import { AdminUserService } from './admin-user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthorizerService {
  private authorizer: any = {
    '/admin/dashboard': AdminPermissions.Cozinha,
    '/admin/orders': AdminPermissions.Garcom,
    '/admin/categories': AdminPermissions.Gerente,
    '/admin/products': AdminPermissions.Gerente,
    '/admin/tables': AdminPermissions.Gerente,
    '/admin/users': AdminPermissions.Administrador,
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
