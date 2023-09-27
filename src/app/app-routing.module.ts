import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { SystemComponent } from './system/system.component';
import { SystemTableRequestComponent } from './system/system-table-request/system-table-request.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminAuthGuard } from './admin/shared/admin-auth.guard';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'login',
        data: { login: true },
        canActivate: [AdminAuthGuard],
        component: AdminLoginComponent,
      },
      {
        path: 'dashboard',
        canActivate: [AdminAuthGuard],
        component: AdminDashboardComponent,
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'request',
        component: SystemTableRequestComponent,
      },
      {
        path: 'menu',
        component: SystemComponent,
      },
      {
        path: '**',
        redirectTo: 'menu'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
