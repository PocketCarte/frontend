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
    AdminUsersAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
