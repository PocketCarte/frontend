import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SystemAuthService {
  public logged = false;
  public valid = false;

  constructor(
    public httpClient: HttpClient,
    private router: Router,
  ) {}

  public async checkToken(route: ActivatedRouteSnapshot): Promise<boolean> {
    const token = localStorage.getItem("token") ?? "error";
    const table_id = route.queryParams["table_id"];

    if (
      table_id &&
      localStorage.getItem("token") === null &&
      route.data["checkRoute"] !== "/not-found"
    ) {
      try {
        await firstValueFrom(
          this.httpClient.get(`${environment.apiUrl}/tables/${table_id}`),
        );
        const table_request = await this.generateToken(table_id);
        localStorage.setItem("token", table_request.token);
        localStorage.setItem("table_id", table_id);
        return true;
      } catch (error) {
        this.router.navigate(["/not-found"]);
        return false;
      }
    }

    if (
      localStorage.getItem("token") === null &&
      route.data["checkRoute"] !== "/not-found"
    ) {
      this.router.navigate(["/not-found"]);
      return false;
    }

    const check: any = await firstValueFrom(
      this.httpClient.post(
        `${environment.apiUrl}/table_requests/${token}/check`,
        {},
      ),
    );

    this.logged = check.logged;
    this.valid = check.valid;

    if (route.data["checkRoute"] !== "/not-found" && !check.logged) {
      localStorage.removeItem("token");
      localStorage.removeItem("table_id");
      this.router.navigate(["/not-found"]);
      return false;
    }

    if (
      (route.data["checkRoute"] === "/tab" ||
        route.data["checkRoute"] === "/request") &&
      !check.valid
    ) {
      this.router.navigate(["/menu"]);
      return false;
    }

    return true;
  }

  public async generateToken(table_id: string): Promise<any> {
    const url = `${environment.apiUrl}/tables/${table_id}/table_requests`;

    const token = await firstValueFrom(this.httpClient.post(url, {}));

    return token;
  }
}
