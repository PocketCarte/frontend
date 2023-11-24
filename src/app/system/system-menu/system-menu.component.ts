import { Component, OnDestroy, OnInit } from "@angular/core";
import { SystemService } from "../shared/system.service";
import { Subscription } from "rxjs";
import { SystemModalService } from "../shared/services/system-modal.service";
import { SystemMenuOrderComponent } from "../system-menu-order/system-menu-order.component";
@Component({
  selector: "app-system-menu",
  templateUrl: "./system-menu.component.html",
  styleUrls: ["./system-menu.component.scss"],
})
export class SystemMenuComponent implements OnInit, OnDestroy {
  public categories: any[] = [];
  public products: any[] = [];
  public currentCategory = "";

  private subscriptions: Subscription = new Subscription();

  constructor(
    public systemService: SystemService,
    public systemModalService: SystemModalService,
  ) {}

  public handleMakeOrder(product: any) {
    this.systemModalService.open({
      title: `Realizar pedido - ${product.name}`,
      component: SystemMenuOrderComponent,
      data: { category: this.currentCategory, product },
    });
  }

  public ngOnInit(): void {
    this.systemService.getCategories().then((result) => {
      this.categories = result;
    });

    this.subscriptions.add(
      this.systemService.currentCategory.subscribe((result) => {
        if (result) {
          this.currentCategory = result;
          this.systemService.getProducts(result).then((result) => {
            this.products = result;
          });
        }
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
