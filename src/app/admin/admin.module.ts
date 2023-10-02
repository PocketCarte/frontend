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
import { AdminInterceptorService } from './shared/services/admin-interceptor.service';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminBodyComponent } from './shared/components/admin-body/admin-body.component';
import { AdminHeaderComponent } from './shared/components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './shared/components/admin-sidebar/admin-sidebar.component';
import { AdminSpinnerComponent } from './shared/components/admin-spinner/admin-spinner.component';
import { AdminTableComponent } from './shared/components/admin-table/admin-table.component';
import { AdminModalComponent } from './shared/components/admin-modal/admin-modal.component';
import { AdminUsersEditComponent } from './admin-users/admin-users-edit/admin-users-edit.component';
import { AdminTablesListComponent } from './admin-tables/admin-tables-list/admin-tables-list.component';
import { AdminTablesAddComponent } from './admin-tables/admin-tables-add/admin-tables-add.component';
import { AdminTablesEditComponent } from './admin-tables/admin-tables-edit/admin-tables-edit.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminCategoriesListComponent,
    AdminCategoriesAddComponent,
    AdminUsersListComponent,
    AdminUsersAddComponent,
    AdminBodyComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    AdminComponent,
    AdminSpinnerComponent,
    AdminTableComponent,
    AdminModalComponent,
    AdminUsersEditComponent,
    AdminTablesListComponent,
    AdminTablesAddComponent,
    AdminTablesEditComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
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
