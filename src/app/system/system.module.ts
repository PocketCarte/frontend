import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SystemComponent } from "./system.component";
import { SystemTableRequestComponent } from "./system-table-request/system-table-request.component";
import { SystemOrderComponent } from "./system-order/system-order.component";
import { SystemMenuComponent } from "./system-menu/system-menu.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { SystemRoutingModule } from "./system-routing.module";
import { SystemNotFoundComponent } from "./system-not-found/system-not-found.component";
import { SystemModalComponent } from "./shared/components/system-modal/system-modal.component";
import { SystemInterceptorService } from "./shared/services/system-interceptor.service";

@NgModule({
  declarations: [
    SystemMenuComponent,
    SystemOrderComponent,
    SystemTableRequestComponent,
    SystemComponent,
    SystemModalComponent,
    SystemNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SystemRoutingModule,
  ],
  providers: [
    SystemInterceptorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SystemInterceptorService,
      multi: true,
    },
  ],
})
export class SystemModule {}
