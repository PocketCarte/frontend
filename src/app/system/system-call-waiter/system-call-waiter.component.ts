import { Component, OnInit } from "@angular/core";
import { SystemWaiterService } from "../shared/services/system-waiter.service";
import { SystemTabService } from "../system-tab/shared/system-tab.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-system-call-waiter",
  templateUrl: "./system-call-waiter.component.html",
  styleUrls: ["./system-call-waiter.component.scss"],
})
export class SystemCallWaiterComponent implements OnInit {
  public table: any;
  public loading = true;

  constructor(
    private systemTabService: SystemTabService,
    private systemWaiterService: SystemWaiterService,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.systemTabService
      .getTab()
      .then((result) => {
        this.table = result;
        this.loading = false;
      })
      .catch(() => {
        this.router.navigate(["/menu"]);
      });
  }

  public handleCallWaiter(): void {
    this.systemWaiterService.sendMessage(
      "EI GARÇOM, TEM MESA TE CHAMANDO!",
      `A mesa ${this.table.name} está chamando o garçom.`,
    );
    alert("Um garçom foi chamado para a sua mesa.");
  }
}
