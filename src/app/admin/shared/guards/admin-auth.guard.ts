import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AdminTokenService } from '../services/admin-token.service';

export const AdminAuthGuard: CanActivateFn = (
  route,
  state
): Promise<boolean> => {
  return new Promise<boolean>(async (resolve) => {
    const adminTokenService = inject(AdminTokenService) as AdminTokenService;
    const router = inject(Router) as Router;

    try {
      await adminTokenService.checkToken();
      if (route.data['login']) {
        router.navigate(['/admin/dashboard']);
      }
      resolve(true);
    } catch (error) {
      if (route.data['login']) {
        resolve(true);
        return;
      }
      router.navigate(['/admin/login']);
      resolve(false);
    }
  });
};
