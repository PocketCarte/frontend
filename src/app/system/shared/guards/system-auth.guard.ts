import { inject } from "@angular/core";
import { ActivatedRoute, CanActivateFn, Router } from "@angular/router";
import { SystemAuthService } from "../services/system-auth.service";

export const SystemAuthGuard: CanActivateFn = async (
  route,
  state,
): Promise<boolean> => {
  const systemAuthService = inject(SystemAuthService) as SystemAuthService;
  const router = inject(Router) as Router;

  console.log(route.data["checkRoute"]);

  if (route.queryParamMap.get("table_id") && !localStorage.getItem("token")) {
    try {
      const table_id = route.queryParamMap.get("table_id") ?? "";
      await systemAuthService.checkTable(table_id);
      const table_request = await systemAuthService.generateToken(table_id);
      localStorage.setItem("token", table_request.token);
      return true;
    } catch (error) {
      localStorage.removeItem("token");
      router.navigate(["/not-found"]);
      return false;
    }
  }

  if (
    localStorage.getItem("token") === undefined &&
    route.data["checkRoute"] !== "/not-found"
  ) {
    router.navigate(["/not-found"]);
    return false;
  }

  try {
    await systemAuthService.checkToken(localStorage.getItem("token") ?? "");
    if (route.data["checkRoute"] === "/not-found") {
      router.navigate(["/menu"]);
    }
    return true;
  } catch (e: any) {
    if (e.error.msg !== "Token não está ativo") {
      localStorage.removeItem("token");
      return false;
    }
    router.navigate(["/not-found"]);
  }

  return true;
};
