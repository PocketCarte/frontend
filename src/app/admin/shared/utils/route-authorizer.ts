import { AdminPermissions } from '../types/admin-permissions';
import { AdminUser } from '../types/admin-user';

export class RouteAuthorizer {
  private authorizer: any;

  constructor(public user: AdminUser) {
    this.authorizer = {
      '/admin/dashboard': user.permission <= AdminPermissions.Cozinha,
      '/admin/orders': user.permission <= AdminPermissions.Garcom,
      '/admin/categories': user.permission <= AdminPermissions.Gerente,
      '/admin/products': user.permission <= AdminPermissions.Gerente,
      '/admin/tables': user.permission <= AdminPermissions.Gerente,
      '/admin/users': user.permission <= AdminPermissions.Administrador,
    };
  }

  public hasRoutePermission(route: string) {
    return this.authorizer[route] ?? false;
  }
}
