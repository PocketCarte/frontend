import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenService {

  constructor(private httpClient: HttpClient) { }

  public async checkToken(): Promise<boolean> {
    const url = `http://localhost:3000/token/check`;

    const tokenBool = await firstValueFrom(this.httpClient.get<boolean>(url));

    return tokenBool;
  }
}
