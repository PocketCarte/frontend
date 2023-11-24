import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { SystemAuthService } from "../../shared/services/system-auth.service";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SystemTabService {
  constructor(
    private httpClient: HttpClient,
    private systemAuthService: SystemAuthService,
  ) {}

  public async getTab(): Promise<any> {
    const table_id = localStorage.getItem("table_id") ?? "";
    const url = `${environment.apiUrl}/tables/${table_id}`;

    const tab = await firstValueFrom(this.httpClient.get(url));

    return tab;
  }
}
