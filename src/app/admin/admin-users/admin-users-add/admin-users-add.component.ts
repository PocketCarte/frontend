import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { SelectItem } from "src/app/shared/components/select/select.component";
import { AdminUsersService } from "../shared/admin-users.service";
import { AdminModalService } from "../../shared/services/admin-modal.service";

@Component({
  selector: "app-admin-users-add",
  templateUrl: "./admin-users-add.component.html",
  styleUrls: ["./admin-users-add.component.scss"],
})
export class AdminUsersAddComponent {
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
    password: new FormControl("", [Validators.required]),
  });
  public loading = false;

  constructor(
    private fb: FormBuilder,
    private adminUsersService: AdminUsersService,
    private adminModalService: AdminModalService,
  ) {}

  public handleAddUser(): void {
    if (this.form.valid && !this.loading) {
      this.loading = true;
      this.adminUsersService
        .addUser(
          this.name.value,
          this.permission.value,
          this.email.value,
          this.password.value,
        )
        .then(() => {
          alert("Usuário adicionado com sucesso");
          this.adminModalService.close();
        })
        .catch(() => {
          alert("Ocorreu um erro ao adicionar o usuário");
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

  public get password() {
    return this.form.get("password") as FormControl;
  }
}
