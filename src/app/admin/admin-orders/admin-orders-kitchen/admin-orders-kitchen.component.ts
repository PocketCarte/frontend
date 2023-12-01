import { Component, OnDestroy, OnInit } from "@angular/core";
import { AdminSpinnerService } from "../../shared/services/admin-spinner.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { AdminOrdersService } from "../shared/admin-orders.service";
import { Subscription } from "rxjs";
import { groupBy } from "lodash";
import { AdminOrdersEditComponent } from "../admin-orders-edit/admin-orders-edit.component";

@Component({
  selector: "app-admin-orders-kitchen",
  templateUrl: "./admin-orders-kitchen.component.html",
  styleUrls: ["./admin-orders-kitchen.component.scss"],
})
export class AdminOrdersKitchenComponent implements OnInit, OnDestroy {
  public data: any = {};
  private subscriptions: Subscription = new Subscription();

  constructor(
    public adminOrdersService: AdminOrdersService,
    public adminSpinnerService: AdminSpinnerService,
    private adminModalService: AdminModalService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminOrdersService.getOrders();
    this.adminSpinnerService.showing = false;
    this.subscriptions.add(
      this.adminOrdersService.orders$.subscribe((result: any) => {
        this.data = groupBy(result, "status");
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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
