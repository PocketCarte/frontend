import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { SystemMenuComponent } from "./system-menu/system-menu.component";
import { SystemTableRequestComponent } from "./system-table-request/system-table-request.component";
import { SystemAuthGuard } from "./shared/guards/system-auth.guard";
import { SystemNotFoundComponent } from "./system-not-found/system-not-found.component";
import { SystemCallWaiterComponent } from "./system-call-waiter/system-call-waiter.component";
import { SystemTabComponent } from "./system-tab/system-tab.component";

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
        path: "tab",
        data: { checkRoute: "/tab" },
        canActivate: [SystemAuthGuard],
        component: SystemTabComponent,
      },
      {
        path: "call_waiter",
        data: { checkRoute: "/call_waiter" },
        canActivate: [SystemAuthGuard],
        component: SystemCallWaiterComponent,
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
