import { Injectable } from '@angular/core';
import { AdminUser } from '../types/admin-user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private userSubject = new BehaviorSubject<AdminUser | undefined>(undefined);
  public loaded = false;

  constructor(private httpClient: HttpClient) {}

  public async loadUser(): Promise<AdminUser> {
    const url = `${environment.apiUrl}/user`;

    const user = await firstValueFrom(this.httpClient.get<AdminUser>(url));

    this.userSubject.next(user);

    this.loaded = true;

    return user;
  }

  public get user() {
    return this.userSubject.value;
  }

  public get user$() {
    return this.userSubject.asObservable();
  }
}
