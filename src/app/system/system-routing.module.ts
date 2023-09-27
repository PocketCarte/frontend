import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemComponent } from './system.component';
import { SystemTableRequestComponent } from './system-table-request/system-table-request.component';

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
        component: SystemComponent,
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
