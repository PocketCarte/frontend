import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AdminAuthorizerService } from '../shared/services/admin-authorizer.service';
import { AdminUserService } from '../shared/services/admin-user.service';
import { AdminDashboardService } from './shared/admin-dashboard.service';
import { AdminDashboard } from '../shared/types/admin-dashboard';
import { AdminSpinnerService } from '../shared/services/admin-spinner.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  public data!: AdminDashboard;
  public tableOptions = [
    {
      label: 'ID',
      column: 'id'
    },
    {
      label: 'Nome',
      column: 'name'
    },
    {
      label: 'Email',
      column: 'email'
    },
    {
      label: 'Permissão',
      column: 'permission'
    },
    {
      editButton: true,
      deleteButton: true
    },
  ]
  public tableData = [
    {
      id: '1',
      name: 'Pedro',
      email: 'pedro@gmail.com',
      permission: 'Administrador',
    },
    {
      id: '2',
      name: 'Pedro',
      email: 'pedro@gmail.com',
      permission: 'Administrador',
    },
    {
      id: '3',
      name: 'Pedro',
      email: 'pedro@gmail.com',
      permission: 'Administrador',
    },
  ]

  constructor(
    public adminAuthorizerService: AdminAuthorizerService,
    public adminUserService: AdminUserService,
    public adminDashboardService: AdminDashboardService,
    public adminSpinnerService: AdminSpinnerService
  ) {
    this.adminUserService.loadUser();
  }

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    this.data = await this.adminDashboardService.getDashboard();
    this.adminSpinnerService.showing = false;
  }

  public onDelete(event: any): void {
    console.log('teste delete', event);
  }

  public onEdit(event: any): void {
    console.log('teste edit', event);
  }
}
