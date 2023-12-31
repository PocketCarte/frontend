import { Component, OnInit } from "@angular/core";
import { SystemModalService } from "../shared/services/system-modal.service";
import { SystemMenuOrderService } from "./shared/system-menu-order.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { SystemAuthService } from "../shared/services/system-auth.service";

@Component({
  selector: "app-system-menu-order",
  templateUrl: "./system-menu-order.component.html",
  styleUrls: ["./system-menu-order.component.scss"],
})
export class SystemMenuOrderComponent {
  public product: any;
  public loading = false;
  public form: FormGroup = this.fb.group({
    quantity: new FormControl("", [Validators.required]),
    description: new FormControl(""),
  });

  constructor(
    public systemModalService: SystemModalService,
    public systemMenuOrder: SystemMenuOrderService,
    public systemAuthService: SystemAuthService,
    private fb: FormBuilder,
  ) {
    this.product = this.systemModalService.data.product;
  }

  public handleMakeOrder(): void {
    this.loading = true;
    this.systemMenuOrder
      .addOrder(
        localStorage.getItem("table_id") ?? "",
        this.product.id,
        this.quantity.value,
        this.description.value,
      )
      .then(() => {
        alert("Pedido realizado com sucesso.");
      })
      .catch(() => {
        alert("Erro ao fazer o pedido, por favor, chame um funcionário");
      })
      .finally(() => {
        this.systemModalService.close();
        this.loading = false;
      });
  }

  public get quantity() {
    return this.form.get("quantity") as FormControl;
  }

  public get description() {
    return this.form.get("description") as FormControl;
  }
}
