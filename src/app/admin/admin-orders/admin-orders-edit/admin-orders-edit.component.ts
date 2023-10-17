import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { AdminTablesService } from "../../admin-tables/shared/admin-tables.service";
import { AdminCategoriesService } from "../../admin-categories/shared/admin-categories.service";
import { AdminProductsService } from "../../admin-products/shared/admin-products.service";
import { AdminOrdersService } from "../shared/admin-orders.service";
import { SelectItem } from "src/app/shared/components/select/select.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-admin-orders-edit",
  templateUrl: "./admin-orders-edit.component.html",
  styleUrls: ["./admin-orders-edit.component.scss"],
})
export class AdminOrdersEditComponent implements OnInit, OnDestroy {
  public tablesOptions: SelectItem[] = [];
  public categoriesOptions: SelectItem[] = [];
  public productsOptions: SelectItem[] = [];
  public statusOptions: SelectItem[] = [
    {
      value: "pending",
      label: "Pendente",
    },
    {
      value: "doing",
      label: "Fazendo",
    },
    {
      value: "finished",
      label: "Finalizado",
    },
    {
      value: "canceled",
      label: "Cancelado",
    },
  ];
  public form: FormGroup = this.fb.group({
    table: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    product: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required]),
    description: new FormControl(""),
    status: new FormControl("", [Validators.required]),
  });
  public loading = false;

  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private adminOrdersService: AdminOrdersService,
    private adminProductsService: AdminProductsService,
    private adminCategoriesService: AdminCategoriesService,
    private adminTablesService: AdminTablesService,
    private adminModalService: AdminModalService,
  ) {}

  public async ngOnInit(): Promise<void> {
    const order = this.adminOrdersService.getOrder(
      this.adminModalService.data.orderId,
    );
    await this.adminCategoriesService.getCategories();
    await this.adminTablesService.getTables();
    this.subscriptions.add(
      this.adminTablesService.tables$.subscribe((result) => {
        this.tablesOptions = result.map((table) => ({
          value: table.id,
          label: table.name,
        }));
      }),
    );
    this.subscriptions.add(
      this.adminCategoriesService.categories$.subscribe((result) => {
        this.categoriesOptions = result.map((category) => ({
          value: category.id,
          label: category.name,
        }));
      }),
    );
    this.subscriptions.add(
      this.category.valueChanges.subscribe(async (value) => {
        this.product.setValue("");
        const products =
          await this.adminProductsService.getProductsByCategory(value);

        this.productsOptions = products.map((product) => ({
          value: product.id,
          label: product.name,
        }));
      }),
    );
    this.form.patchValue({
      table: order.table_id,
      quantity: order.product_quantity,
      description: order.description,
      category: order.category_id,
      product: order.product_id,
      status: order.status,
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleSaveOrder(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminOrdersService
        .updateOrder(
          this.adminModalService.data.orderId,
          this.product.value,
          this.quantity.value,
          this.description.value,
          this.status.value,
        )
        .then(() => {
          alert("Pedido salvo com sucesso!");
        })
        .catch(() => {
          alert("Ocorreu um erro ao salvar o pedido");
        })
        .finally(() => {
          this.loading = false;
          this.adminModalService.close();
        });
    }
  }

  public isFillable(control: string) {
    if (control === "product") {
      return this.category.valid;
    }
    if (
      control === "quantity" ||
      control === "description" ||
      control === "status"
    ) {
      return this.product.valid;
    }

    return true;
  }

  public get table() {
    return this.form.get("table") as FormControl;
  }

  public get category() {
    return this.form.get("category") as FormControl;
  }

  public get product() {
    return this.form.get("product") as FormControl;
  }

  public get quantity() {
    return this.form.get("quantity") as FormControl;
  }

  public get description() {
    return this.form.get("description") as FormControl;
  }

  public get status() {
    return this.form.get("status") as FormControl;
  }
}
