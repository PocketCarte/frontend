import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminTablesService } from "../shared/admin-tables.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";

@Component({
  selector: "app-admin-tables-add",
  templateUrl: "./admin-tables-add.component.html",
  styleUrls: ["./admin-tables-add.component.scss"],
})
export class AdminTablesAddComponent {
  private form: FormGroup = this.fb.group({
    name: new FormControl("", [Validators.required]),
  });
  private loading = false;

  constructor(
    private fb: FormBuilder,
    private adminTablesService: AdminTablesService,
    private adminModalService: AdminModalService,
  ) {}

  public handleAddTable(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminTablesService
        .addTable(this.name.value)
        .then(() => {
          alert("Mesa adicionada com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao adicionar a mesa");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  public get name() {
    return this.form.get("name") as FormControl;
  }
}
