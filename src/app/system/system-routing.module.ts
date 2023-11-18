import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { SystemMenuComponent } from "./system-menu/system-menu.component";
import { SystemTableRequestComponent } from "./system-table-request/system-table-request.component";
import { SystemOrderComponent } from "./system-order/system-order.component";
import { SystemAuthGuard } from "./shared/guards/system-auth.guard";
import { SystemNotFoundComponent } from "./system-not-found/system-not-found.component";
// this.route.snapshot.queryParamMap.get('filter')
const routes: Routes = [
  {
    path: "",
    component: SystemComponent,
    children: [
      {
        path: "request",
        data: { checkRoute: "/request" },
        canActivate: [SystemAuthGuard],
        component: SystemTableRequestComponent,
      },
      {
        path: "menu",
        data: { checkRoute: "/menu" },
        canActivate: [SystemAuthGuard],
        component: SystemMenuComponent,
      },
      {
        path: "order",
        data: { checkRoute: "/order" },
        canActivate: [SystemAuthGuard],
        component: SystemOrderComponent,
      },
      {
        path: "not-found",
        data: { checkRoute: "/not-found" },
        canActivate: [SystemAuthGuard],
        component: SystemNotFoundComponent,
      },
      {
        path: "**",
        redirectTo: "menu",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
