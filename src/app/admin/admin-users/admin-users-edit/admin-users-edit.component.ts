import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AdminUsersService } from "../shared/admin-users.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";
import { SelectItem } from "src/app/shared/components/select/select.component";

@Component({
  selector: "app-admin-users-edit",
  templateUrl: "./admin-users-edit.component.html",
  styleUrls: ["./admin-users-edit.component.scss"],
})
export class AdminUsersEditComponent implements OnInit {
  public permissionsItems: SelectItem[] = [
    {
      value: "1",
      label: "Administrador",
    },
    {
      value: "2",
      label: "Gerente",
    },
    {
      value: "3",
      label: "Garçom",
    },
    {
      value: "4",
      label: "Cozinha",
    },
  ];

  public form: FormGroup = this.fb.group({
    name: new FormControl("", [Validators.required]),
    permission: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
  });
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private adminUsersService: AdminUsersService,
    private adminModalService: AdminModalService,
  ) {}

  public ngOnInit(): void {
    this.adminUsersService
      .getUser(this.adminModalService.data.userId)
      .then((result) => {
        this.form.patchValue({
          name: result.name,
          permission: result.permission,
          email: result.email,
        });
      })
      .catch(() => {
        this.adminModalService.close();
      });
  }

  public handleSaveUser(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminUsersService
        .updateUser(
          this.adminModalService.data.userId,
          this.name.value,
          this.permission.value,
          this.email.value,
        )
        .then(() => {
          alert("Usuário salvo com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao salvar o usuário");
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }

  public get name() {
    return this.form.get("name") as FormControl;
  }

  public get permission() {
    return this.form.get("permission") as FormControl;
  }

  public get email() {
    return this.form.get("email") as FormControl;
  }
}
