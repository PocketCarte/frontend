import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private httpClient: HttpClient) { }

  public async login(email: string, password: string): Promise<any> {
    const url = `http://localhost:3000/token`;

    const token = await firstValueFrom(this.httpClient.post(url, { email, password }));

    return token;
  }

}
