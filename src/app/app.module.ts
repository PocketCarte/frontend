import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminCategoriesListComponent } from './admin/admin-categories/admin-categories-list/admin-categories-list.component';
import { AdminCategoriesAddComponent } from './admin/admin-categories/admin-categories-add/admin-categories-add.component';
import { AdminUsersListComponent } from './admin/admin-users/admin-users-list/admin-users-list.component';
import { AdminUsersAddComponent } from './admin/admin-users/admin-users-add/admin-users-add.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SystemMenuComponent } from './system/system-menu/system-menu.component';
import { SystemOrderComponent } from './system/system-order/system-order.component';
import { SystemTableRequestComponent } from './system/system-table-request/system-table-request.component';
import { SystemComponent } from './system/system.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminCategoriesListComponent,
    AdminCategoriesAddComponent,
    AdminUsersListComponent,
    AdminUsersAddComponent,
    ButtonComponent,
    InputComponent,
    SystemMenuComponent,
    SystemOrderComponent,
    SystemTableRequestComponent,
    SystemComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
