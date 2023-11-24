import { Component, OnInit } from "@angular/core";
import { SystemTabService } from "./shared/system-tab.service";
import { Router } from "@angular/router";
import { SystemWaiterService } from "../shared/services/system-waiter.service";

@Component({
  selector: "app-system-tab",
  templateUrl: "./system-tab.component.html",
  styleUrls: ["./system-tab.component.scss"],
})
export class SystemTabComponent implements OnInit {
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
        console.log(result);
        this.loading = false;
      })
      .catch(() => {
        this.router.navigate(["/menu"]);
      });
  }

  public handleFinishTab(): void {
    this.systemWaiterService.sendMessage(
      "EI GARÇOM, TEM MESA PEDINDO A CONTA",
      `A mesa ${this.table.name} está pedindo a conta`,
    );
  }
}
