import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { ButtonComponent } from "./components/button/button.component";
import { InputComponent } from "./components/input/input.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SelectComponent } from "./components/select/select.component";
import { UploadImageComponent } from "./components/upload-image/upload-image.component";
import { OrderStatusPipe } from "./pipes/order-status.pipe";
import { UserPermissionPipe } from "./pipes/user-permission.pipe";
import { TableStatusPipe } from "./pipes/table-status.pipe";

@NgModule({
  declarations: [
    FooterComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    UploadImageComponent,
    OrderStatusPipe,
    UserPermissionPipe,
    TableStatusPipe,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [
    FooterComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    UploadImageComponent,
    OrderStatusPipe,
    UserPermissionPipe,
    TableStatusPipe,
    CommonModule,
  ],
})
export class SharedModule {}
