import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SystemAuthService {
  constructor(public httpClient: HttpClient) {}

  public async checkToken(token: string): Promise<void> {
    await firstValueFrom(
      this.httpClient.post(
        `${environment.apiUrl}/table_requests/${token}/check`,
        {},
      ),
    );
  }

  public async checkTable(table_id: string): Promise<void> {
    await firstValueFrom(
      this.httpClient.get(`${environment.apiUrl}/tables/${table_id}`),
    );
  }

  public async generateToken(table_id: string): Promise<any> {
    const url = `${environment.apiUrl}/tables/${table_id}/table_requests`;

    const token = await firstValueFrom(this.httpClient.post(url, {}));

    return token;
  }
}
