import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminTable } from "../../shared/types/admin-table";
import { AdminSpinnerService } from "../../shared/services/admin-spinner.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { AdminOrdersAddComponent } from "../admin-orders-add/admin-orders-add.component";
import { AdminOrdersService } from "../shared/admin-orders.service";
import { AdminOrdersEditComponent } from "../admin-orders-edit/admin-orders-edit.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-orders-list",
  templateUrl: "./admin-orders-list.component.html",
  styleUrls: ["./admin-orders-list.component.scss"],
})
export class AdminOrdersListComponent implements OnInit, OnDestroy {
  public tableOptions = [
    {
      label: "Mesa",
      column: "table_name",
    },
    {
      label: "Pedido",
      column: "product_name",
    },
    {
      label: "Quantidade",
      column: "product_quantity",
    },
    {
      label: "Status",
      statusColumn: "status",
    },
    {
      label: "Criado em",
      dateColumn: "created_at",
    },
    {
      cancelButton: true,
      editButton: true,
    },
  ];

  public data: AdminTable[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(
    public adminOrdersService: AdminOrdersService,
    public adminSpinnerService: AdminSpinnerService,
    private adminModalService: AdminModalService,
    private router: Router,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminOrdersService.getOrders();
    this.adminSpinnerService.showing = false;
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleOpenKitchenOrdersMenu(): void {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(["/admin/orders/kitchen"]),
    );

    window.open(url, "_blank");
  }

  public handleAddOrder(): void {
    this.adminModalService.open({
      title: "Adicionar pedido",
      component: AdminOrdersAddComponent,
    });
  }

  public handleCancelOrder(event: any): void {
    this.adminOrdersService
      .cancelOrder(event.id)
      .then(() => {
        alert(`Pedido ${event.id} cancelado com sucesso`);
      })
      .catch(() => {
        alert(`Ocorreu um erro ao deletar a mesa ${event.id}`);
      });
  }

  public handleEditOrder(event: any): void {
    this.adminModalService.open({
      title: "Editar pedido",
      component: AdminOrdersEditComponent,
      data: {
        orderId: event.id,
      },
    });
  }
}
