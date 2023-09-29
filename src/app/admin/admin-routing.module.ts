import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersListComponent } from './admin-users/admin-users-list/admin-users-list.component';

const routes: Routes = [
  {
    path: '',
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
        data: { checkRoute: '/admin/dashboard' },
        canActivate: [AdminAuthGuard],
        component: AdminDashboardComponent,
      },
      {
        path: 'users',
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: 'list',
            data: { checkRoute: '/admin/users' },
            component: AdminUsersListComponent
          },
          {
            path: '**',
            redirectTo: 'list'
          }
        ]
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
