import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SystemTableRequestComponent } from './system-table-request/system-table-request.component';
import { SystemOrderComponent } from './system-order/system-order.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SystemInterceptorService } from '../shared/services/system-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  declarations: [
    SystemMenuComponent,
    SystemOrderComponent,
    SystemTableRequestComponent,
    SystemComponent,
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
export class SystemModule { }
