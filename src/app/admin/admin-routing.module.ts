import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AdminAuthGuard } from "./shared/guards/admin-auth.guard";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminUsersListComponent } from "./admin-users/admin-users-list/admin-users-list.component";
import { AdminTablesListComponent } from "./admin-tables/admin-tables-list/admin-tables-list.component";
import { AdminCategoriesListComponent } from "./admin-categories/admin-categories-list/admin-categories-list.component";
import { AdminProductsListComponent } from "./admin-products/admin-products-list/admin-products-list.component";
import { AdminOrdersListComponent } from "./admin-orders/admin-orders-list/admin-orders-list.component";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "login",
        data: { login: true },
        canActivate: [AdminAuthGuard],
        component: AdminLoginComponent,
      },
      {
        path: "dashboard",
        data: { checkRoute: "/admin/dashboard" },
        canActivate: [AdminAuthGuard],
        component: AdminDashboardComponent,
      },
      {
        path: "orders",
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: "list",
            data: { checkRoute: "/admin/orders" },
            component: AdminOrdersListComponent,
          },
          {
            path: "**",
            redirectTo: "list",
          },
        ],
      },
      {
        path: "categories",
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: "list",
            data: { checkRoute: "/admin/categories" },
            component: AdminCategoriesListComponent,
          },
          {
            path: "**",
            redirectTo: "list",
          },
        ],
      },
      {
        path: "products",
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: "list",
            data: { checkRoute: "/admin/products" },
            component: AdminProductsListComponent,
          },
          {
            path: "**",
            redirectTo: "list",
          },
        ],
      },
      {
        path: "tables",
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: "list",
            data: { checkRoute: "/admin/tables" },
            component: AdminTablesListComponent,
          },
          {
            path: "**",
            redirectTo: "list",
          },
        ],
      },
      {
        path: "users",
        canActivate: [AdminAuthGuard],
        children: [
          {
            path: "list",
            data: { checkRoute: "/admin/users" },
            component: AdminUsersListComponent,
          },
          {
            path: "**",
            redirectTo: "list",
          },
        ],
      },
      {
        path: "**",
        redirectTo: "login",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
