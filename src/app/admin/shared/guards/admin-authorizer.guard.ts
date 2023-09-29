import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminAuthorizerService } from '../services/admin-authorizer.service';
import { AdminUserService } from '../services/admin-user.service';
import { AdminUser } from '../types/admin-user';

export const AdminAuthorizerGuard: CanActivateFn = (
  route,
  state
): Promise<boolean> => {
  return new Promise<boolean>(async (resolve) => {
    const adminAuthorizerService = inject(AdminAuthorizerService) as AdminAuthorizerService;
    const adminUserService = inject(AdminUserService) as AdminUserService;
    const router = inject(Router) as Router;
    await adminUserService.loadUser();

    const hasPermission = adminAuthorizerService.hasRoutePermission(route.data['checkRoute']);

    if(!hasPermission){
      router.navigate(['/admin/dashboard']);
      resolve(false);
    }else{
      resolve(true);
    }
  });
};
