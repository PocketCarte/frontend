import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUsersAddComponent } from './admin-users/admin-users-add/admin-users-add.component';
import { AdminUsersListComponent } from './admin-users/admin-users-list/admin-users-list.component';
import { AdminCategoriesAddComponent } from './admin-categories/admin-categories-add/admin-categories-add.component';
import { AdminCategoriesListComponent } from './admin-categories/admin-categories-list/admin-categories-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { AdminInterceptorService } from './shared/admin-interceptor.service';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminCategoriesListComponent,
    AdminCategoriesAddComponent,
    AdminUsersListComponent,
    AdminUsersAddComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AdminInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdminInterceptorService,
      multi: true,
    },
   ],
})
export class AdminModule { }
