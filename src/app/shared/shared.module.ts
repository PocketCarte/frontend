import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    InputComponent,
    AdminSidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    InputComponent,
    CommonModule,
    AdminSidebarComponent,
  ]
})
export class SharedModule { }
