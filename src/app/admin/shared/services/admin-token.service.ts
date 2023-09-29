import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenService {

  constructor(private httpClient: HttpClient) { }

  public async checkToken(): Promise<boolean> {
    const url = `${environment.apiUrl}/token/check`;

    const tokenBool = await firstValueFrom(this.httpClient.get<boolean>(url));

    return tokenBool;
  }
}
