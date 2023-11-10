import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminCategoriesService } from "../shared/admin-categories.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";

@Component({
  selector: "app-admin-categories-add",
  templateUrl: "./admin-categories-add.component.html",
  styleUrls: ["./admin-categories-add.component.scss"],
})
export class AdminCategoriesAddComponent {
  public form: FormGroup = this.fb.group({
    name: new FormControl("", [Validators.required]),
  });
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private adminCategoriesService: AdminCategoriesService,
    private adminModalService: AdminModalService,
  ) {}

  public handleAddCategory(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminCategoriesService
        .addCategory(this.name.value)
        .then(() => {
          alert("Categoria adicionada com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao adicionar a categoria");
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
