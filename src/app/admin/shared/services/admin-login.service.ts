import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpClient: HttpClient) { }

  public async login(email: string, password: string): Promise<any> {
    const url = `${environment.apiUrl}/token`;

    const token = await firstValueFrom(this.httpClient.post(url, { email, password }));

    return token;
  }

  public logout(): void {
    localStorage.removeItem("adminToken");
    location.reload();
  }

}
