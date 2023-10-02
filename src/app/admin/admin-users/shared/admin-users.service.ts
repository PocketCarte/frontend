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

  public async getUser(id: string): Promise<AdminUser> {
    const url = `${environment.apiUrl}/users/${id}`;

    const user = await firstValueFrom(this.httpClient.get<AdminUser>(url));

    return user;
  }

  public async getUsers(): Promise<AdminUser[]> {
    const url = `${environment.apiUrl}/users`;

    const users = await firstValueFrom(this.httpClient.get<AdminUser[]>(url));

    this.usersBehavior.next(users);

    return users;
  }

  public async addUser(name: string, permission: number, email: string, password: string): Promise<void> {
    const url = `${environment.apiUrl}/users`;

    await firstValueFrom(this.httpClient.post(url, { name, permission, email, password }));

    await this.getUsers();
  }

  public async updateUser(id:string, name: string, permission: number, email: string): Promise<void> {
    const url = `${environment.apiUrl}/users/${id}`;

    await firstValueFrom(this.httpClient.put(url, { name, permission, email }));

    await this.getUsers();
  }

  public async deleteUser(id: string): Promise<void> {
    const url = `${environment.apiUrl}/users/${id}`;

    await firstValueFrom(this.httpClient.delete(url));

    await this.getUsers();
  }

  public get users() {
    return this.usersBehavior.value;
  }

  public get users$() {
    return this.usersBehavior.asObservable();
  }
}
