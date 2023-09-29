import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminDashboard } from '../../shared/types/admin-dashboard';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  constructor(private httpClient: HttpClient) { }

  public getDashboard(): Promise<AdminDashboard> {
    const url = `${environment.apiUrl}/dashboard`;

    const dashboard = firstValueFrom(this.httpClient.get<AdminDashboard>(url));

    return dashboard;
  } 

}
