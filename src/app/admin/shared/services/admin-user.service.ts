import { Injectable } from '@angular/core';
import { AdminUser } from '../types/admin-user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  private userSubject = new BehaviorSubject<AdminUser | undefined>(undefined);
  public loaded = false;

  constructor(private httpClient: HttpClient, private router: Router) {}

  public async loadUser(): Promise<AdminUser> {
    let user;
    try {
      const url = `${environment.apiUrl}/user`;
  
      user = await firstValueFrom(this.httpClient.get<AdminUser>(url));

      this.userSubject.next(user);
    } catch (error) {
      localStorage.removeItem('adminToken');
      this.router.navigate(['/admin/login']);
      user = {
        id: '',
        name: '',
        email: '',
        permission: 0
      }
    }
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
