import { Component, OnDestroy, OnInit } from "@angular/core";
import { SelectItem } from "src/app/shared/components/select/select.component";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { AdminOrdersService } from "../shared/admin-orders.service";
import { Subscription } from "rxjs";
import { AdminCategoriesService } from "../../admin-categories/shared/admin-categories.service";
import { AdminProductsService } from "../../admin-products/shared/admin-products.service";
import { AdminTablesService } from "../../admin-tables/shared/admin-tables.service";

@Component({
  selector: "app-admin-orders-add",
  templateUrl: "./admin-orders-add.component.html",
  styleUrls: ["./admin-orders-add.component.scss"],
})
export class AdminOrdersAddComponent implements OnInit, OnDestroy {
  public tablesOptions: SelectItem[] = [];
  public categoriesOptions: SelectItem[] = [];
  public productsOptions: SelectItem[] = [];
  public form: FormGroup = this.fb.group({
    table: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    product: new FormControl("", [Validators.required]),
    quantity: new FormControl("", [Validators.required]),
    description: new FormControl(""),
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
        const products =
          await this.adminProductsService.getProductsByCategory(value);

        this.productsOptions = products.map((product) => ({
          value: product.id,
          label: product.name,
        }));
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleAddOrder(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminOrdersService
        .addOrder(
          this.table.value,
          this.product.value,
          this.quantity.value,
          this.description.value,
        )
        .then(() => {
          const added = confirm(
            "Pedido adicionado com sucesso\n\nDeseja adicionar mais outro pedido?\nClique em 'OK' para adicionar outro pedido",
          );
          if (added) {
            this.form.reset({
              table: "",
              category: "",
              product: "",
              quantity: "",
              description: "",
            });
          } else {
            this.adminModalService.close();
          }
        })
        .catch(() => {
          alert("Ocorreu um erro ao adicionar o pedido");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  public isFillable(control: string) {
    if (control === "product") {
      return this.category.valid;
    }
    if (control === "quantity" || control === "description") {
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
}
