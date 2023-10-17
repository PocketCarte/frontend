import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";
import { SelectItem } from "src/app/shared/components/select/select.component";
import { AdminProductsService } from "../shared/admin-products.service";
import { AdminCategoriesService } from "../../admin-categories/shared/admin-categories.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";

@Component({
  selector: "app-admin-products-edit",
  templateUrl: "./admin-products-edit.component.html",
  styleUrls: ["./admin-products-edit.component.scss"],
})
export class AdminProductsEditComponent implements OnInit, OnDestroy {
  public categoriesOptions: SelectItem[] = [];

  private form: FormGroup = this.fb.group({
    name: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    category_id: new FormControl("", [Validators.required]),
    image: new FormControl(null),
  });

  public initialImage: BehaviorSubject<string> = new BehaviorSubject<string>(
    "",
  );
  private loading = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private adminProductsService: AdminProductsService,
    private adminCategoriesService: AdminCategoriesService,
    private adminModalService: AdminModalService,
  ) {}

  public ngOnInit(): void {
    this.adminProductsService
      .getProduct(
        this.adminModalService.data.productId,
        this.adminModalService.data.categoryId,
      )
      .then((result) => {
        this.initialImage.next(result.image);
        this.form.patchValue({
          name: result.name,
          price: result.price,
          category_id: result.category_id,
        });
      })
      .catch(() => {
        this.adminModalService.close();
      });
    this.adminCategoriesService.getCategories();
    this.subscriptions.add(
      this.adminCategoriesService.categories$.subscribe((result) => {
        this.categoriesOptions = result.map((category) => ({
          value: category.id,
          label: category.name,
        }));
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleSaveCategory(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;

      this.adminProductsService
        .updateProduct(
          this.adminModalService.data.productId,
          this.name.value,
          this.price.value,
          this.category_id.value,
          this.image.value,
        )
        .then(() => {
          alert("Produto salvo com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao salvar o produto");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  public get name() {
    return this.form.get("name") as FormControl;
  }

  public get price() {
    return this.form.get("price") as FormControl;
  }

  public get category_id() {
    return this.form.get("category_id") as FormControl;
  }

  public get image() {
    return this.form.get("image") as FormControl;
  }
}
