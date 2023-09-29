import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminUser } from '../../shared/types/admin-user';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminUsersService {

  public usersBehavior = new BehaviorSubject<AdminUser[]>([]);

  constructor(private httpClient: HttpClient) { }

  public async getUsers(): Promise<AdminUser[]> {
    const url = `${environment.apiUrl}/users`;

    const users = await firstValueFrom(this.httpClient.get<AdminUser[]>(url));

    this.usersBehavior.next(users);

    return users;
  }

  public get users() {
    return this.usersBehavior.value;
  }

  public get users$() {
    return this.usersBehavior.asObservable();
  }
}
