import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminProductsService } from '../shared/admin-products.service';
import { AdminModalService } from '../../shared/services/admin-modal.service';
import { AdminCategory } from '../../shared/types/admin-category';
import { SelectItem } from 'src/app/shared/components/select/select.component';
import { AdminCategoriesService } from '../../admin-categories/shared/admin-categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products-add',
  templateUrl: './admin-products-add.component.html',
  styleUrls: ['./admin-products-add.component.scss']
})
export class AdminProductsAddComponent implements OnInit, OnDestroy{

  public categoriesOptions: SelectItem[] = []

  private form: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  });
  private loading: boolean = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private adminProductsService: AdminProductsService,
    private adminCategoriesService: AdminCategoriesService,
    private adminModalService: AdminModalService
  ) {}

  public ngOnInit(): void {
    this.adminCategoriesService.getCategories();
    this.subscriptions.add(
      this.adminCategoriesService.categories$.subscribe((result) => {
        this.categoriesOptions = result.map((category) => ({ value: category.id, label: category.name }));
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleAddCategory(): void {
    if(this.form.valid && !this.loading){
      this.loading = true;

      this.adminProductsService
        .addProduct(
          this.name.value,
          this.price.value,
          this.category_id.value,
          this.image.value
        )
        .then(() => {
          alert('Produto adicionado com sucesso');
          this.adminModalService.close();
        })
        .catch(() => {
          alert('Ocorreu um erro ao adicionar o produto');
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  public get name() {
    return this.form.get('name') as FormControl;
  }

  public get price() {
    return this.form.get('price') as FormControl;
  }

  public get category_id() {
    return this.form.get('category_id') as FormControl;
  }

  public get image() {
    return this.form.get('image') as FormControl;
  }
}
