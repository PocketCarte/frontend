import { Component, OnDestroy, OnInit } from "@angular/core";
import { AdminCategoriesService } from "../shared/admin-categories.service";
import { AdminSpinnerService } from "../../shared/services/admin-spinner.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { Subscription } from "rxjs";
import { AdminCategory } from "../../shared/types/admin-category";
import { AdminCategoriesAddComponent } from "../admin-categories-add/admin-categories-add.component";
import { AdminCategoriesEditComponent } from "../admin-categories-edit/admin-categories-edit.component";

@Component({
  selector: "app-admin-categories-list",
  templateUrl: "./admin-categories-list.component.html",
  styleUrls: ["./admin-categories-list.component.scss"],
})
export class AdminCategoriesListComponent implements OnInit, OnDestroy {
  public tableOptions = [
    {
      label: "Nome",
      column: "name",
    },
    {
      deleteButton: true,
      editButton: true,
    },
  ];
  public data: AdminCategory[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(
    public adminCategoriesService: AdminCategoriesService,
    public adminSpinnerService: AdminSpinnerService,
    private adminModalService: AdminModalService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminCategoriesService.getCategories();
    this.adminSpinnerService.showing = false;
    this.subscriptions.add(
      this.adminCategoriesService.categories$.subscribe((result) => {
        this.data = result;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleAddCategory(): void {
    this.adminModalService.open({
      title: "Adicionar categoria",
      component: AdminCategoriesAddComponent,
    });
  }

  public handleDeleteCategory(event: any): void {
    this.adminCategoriesService
      .deleteCategory(event.id)
      .then(() => {
        alert(`Categoria ${event.name} deletada com sucesso`);
      })
      .catch(() => {
        alert(`Ocorreu um erro ao deletar a categoria ${event.name}`);
      });
  }

  public handleEditCategory(event: any): void {
    this.adminModalService.open({
      title: "Editar categoria",
      component: AdminCategoriesEditComponent,
      data: {
        categoryId: event.id,
      },
    });
  }
}
