import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminCategoriesService } from "../shared/admin-categories.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";

@Component({
  selector: "app-admin-categories-edit",
  templateUrl: "./admin-categories-edit.component.html",
  styleUrls: ["./admin-categories-edit.component.scss"],
})
export class AdminCategoriesEditComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    name: new FormControl("", [Validators.required]),
  });
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private adminCategoriesService: AdminCategoriesService,
    private adminModalService: AdminModalService,
  ) {}

  public ngOnInit(): void {
    this.adminCategoriesService
      .getCategory(this.adminModalService.data.categoryId)
      .then((result) => {
        this.form.patchValue({
          name: result.name,
        });
      })
      .catch(() => {
        this.adminModalService.close();
      });
  }

  public handleSaveCategory(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminCategoriesService
        .updateCategory(this.adminModalService.data.categoryId, this.name.value)
        .then(() => {
          alert("Categoria salva com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao salvar a categoria");
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
