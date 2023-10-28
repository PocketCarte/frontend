import { Component, OnDestroy, OnInit } from "@angular/core";
import { AdminProduct } from "../../shared/types/admin-product";
import { Subscription } from "rxjs";
import { AdminProductsService } from "../shared/admin-products.service";
import { AdminSpinnerService } from "../../shared/services/admin-spinner.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { AdminProductsAddComponent } from "../admin-products-add/admin-products-add.component";
import { AdminProductsEditComponent } from "../admin-products-edit/admin-products-edit.component";

@Component({
  selector: "app-admin-products-list",
  templateUrl: "./admin-products-list.component.html",
  styleUrls: ["./admin-products-list.component.scss"],
})
export class AdminProductsListComponent implements OnInit, OnDestroy {
  public tableOptions = [
    {
      label: "Produto",
      imageColumn: "image",
    },
    {
      label: "Nome",
      column: "name",
    },
    {
      label: "Preço",
      moneyColumn: "price",
    },
    {
      deleteButton: true,
      editButton: true,
    },
  ];
  public data: AdminProduct[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(
    public adminProductsService: AdminProductsService,
    public adminSpinnerService: AdminSpinnerService,
    private adminModalService: AdminModalService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminProductsService.getProducts();
    this.adminSpinnerService.showing = false;
    this.subscriptions.add(
      this.adminProductsService.products$.subscribe((result) => {
        this.data = result;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleAddProduct(): void {
    this.adminModalService.open({
      title: "Adicionar produto",
      component: AdminProductsAddComponent,
    });
  }

  public handleDeleteProduct(event: any): void {
    this.adminProductsService
      .deleteProduct(event.id, event.category_id)
      .then(() => {
        alert(`Produto ${event.name} deletado com sucesso`);
      })
      .catch(() => {
        alert(`Ocorreu um erro ao deletar o produto ${event.name}`);
      });
  }

  public handleEditProduct(event: any): void {
    this.adminModalService.open({
      title: "Editar produto",
      component: AdminProductsEditComponent,
      data: {
        productId: event.id,
        categoryId: event.category_id,
      },
    });
  }
}
