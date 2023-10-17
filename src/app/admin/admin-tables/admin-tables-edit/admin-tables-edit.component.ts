import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminTablesService } from "../shared/admin-tables.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { SelectItem } from "src/app/shared/components/select/select.component";
import { AdminTable } from "../../shared/types/admin-table";

@Component({
  selector: "app-admin-tables-edit",
  templateUrl: "./admin-tables-edit.component.html",
  styleUrls: ["./admin-tables-edit.component.scss"],
})
export class AdminTablesEditComponent implements OnInit {
  public statusItems: SelectItem[] = [
    {
      value: "0",
      label: "Disponível",
    },
    {
      value: "1",
      label: "Ocupada",
    },
  ];
  public table!: AdminTable;

  private form: FormGroup = this.fb.group({
    name: new FormControl("", [Validators.required]),
    status: new FormControl("", [Validators.required]),
  });
  private loading = false;

  constructor(
    private fb: FormBuilder,
    private adminTablesService: AdminTablesService,
    private adminModalService: AdminModalService,
  ) {}

  public ngOnInit(): void {
    this.adminTablesService
      .getTable(this.adminModalService.data.tableId)
      .then((result) => {
        this.table = result;
        this.form.patchValue({
          name: result.name,
          status: result.status,
        });
      })
      .catch(() => {
        this.adminModalService.close();
      });
  }

  public handleSaveTable(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminTablesService
        .updateTable(
          this.adminModalService.data.tableId,
          this.name.value,
          this.status.value,
        )
        .then(() => {
          alert("Mesa salva com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao salvar a mesa");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  public get name() {
    return this.form.get("name") as FormControl;
  }

  public get status() {
    return this.form.get("status") as FormControl;
  }
}
