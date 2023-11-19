import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { SystemAuthService } from "../services/system-auth.service";

export const SystemAuthGuard: CanActivateFn = (
  route,
  state,
): Promise<boolean> => {
  const systemAuthService = inject(SystemAuthService) as SystemAuthService;

  return systemAuthService.checkToken(route);
};
