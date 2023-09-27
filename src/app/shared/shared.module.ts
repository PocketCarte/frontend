import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { AdminBodyComponent } from './components/admin/admin-body/admin-body.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    InputComponent,
    AdminSidebarComponent,
    AdminBodyComponent,
    AdminHeaderComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    InputComponent,
    CommonModule,
    AdminSidebarComponent,
    AdminBodyComponent,
    AdminHeaderComponent,
  ],
})
export class SharedModule {}
