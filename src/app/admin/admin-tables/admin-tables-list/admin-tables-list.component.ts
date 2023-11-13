import { Component, OnDestroy, OnInit } from "@angular/core";
import { AdminTablesService } from "../shared/admin-tables.service";
import { AdminSpinnerService } from "../../shared/services/admin-spinner.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { AdminTablesAddComponent } from "../admin-tables-add/admin-tables-add.component";
import { AdminTable } from "../../shared/types/admin-table";
import { Subscription } from "rxjs";
import { AdminTablesEditComponent } from "../admin-tables-edit/admin-tables-edit.component";
import { AdminUserService } from "../../shared/services/admin-user.service";
import { AdminPermissions } from "../../shared/types/admin-permissions";

@Component({
  selector: "app-admin-tables-list",
  templateUrl: "./admin-tables-list.component.html",
  styleUrls: ["./admin-tables-list.component.scss"],
})
export class AdminTablesListComponent implements OnInit, OnDestroy {
  public tableOptions = [
    {
      label: "Nome",
      column: "name",
    },
    {
      label: "Status",
      tableStatusColumn: "status",
    },
    {
      deleteButton: true,
      editButton: true,
    },
  ];
  public data: AdminTable[] = [];
  public adminPermissions = AdminPermissions;

  private subscriptions: Subscription = new Subscription();

  constructor(
    public adminTablesService: AdminTablesService,
    public adminSpinnerService: AdminSpinnerService,
    public adminUserService: AdminUserService,
    private adminModalService: AdminModalService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminTablesService.getTables();
    this.adminSpinnerService.showing = false;
    this.subscriptions.add(
      this.adminTablesService.tables$.subscribe((result) => {
        this.data = result;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public handleAddTable(): void {
    this.adminModalService.open({
      title: "Adicionar mesa",
      component: AdminTablesAddComponent,
    });
  }

  public handleDeleteTable(event: any): void {
    this.adminTablesService
      .deleteTable(event.id)
      .then(() => {
        alert(`Mesa ${event.name} deletada com sucesso`);
      })
      .catch(() => {
        alert(`Ocorreu um erro ao deletar a mesa ${event.name}`);
      });
  }

  public handleEditTable(event: any): void {
    this.adminModalService.open({
      title: "Editar mesa",
      component: AdminTablesEditComponent,
      data: {
        tableId: event.id,
      },
    });
  }
}
