import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { SystemTableRequestComponent } from './system-table-request/system-table-request.component';
import { SystemOrderComponent } from './system-order/system-order.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: 'request',
        component: SystemTableRequestComponent,
      },
      {
        path: 'menu',
        component: SystemMenuComponent,
      },
      {
        path: 'order',
        component: SystemOrderComponent,
      },
      {
        path: '**',
        redirectTo: 'menu'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
