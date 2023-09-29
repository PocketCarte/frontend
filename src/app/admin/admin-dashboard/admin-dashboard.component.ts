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
}
