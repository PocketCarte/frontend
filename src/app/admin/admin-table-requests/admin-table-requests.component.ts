import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { AdminTableRequestsService } from "./shared/admin-table-requests.service";
import { AdminSpinnerService } from "../shared/services/admin-spinner.service";
import { AdminModalService } from "../shared/services/admin-modal.service";

@Component({
  selector: "app-admin-table-requests",
  templateUrl: "./admin-table-requests.component.html",
  styleUrls: ["./admin-table-requests.component.scss"],
})
export class AdminTableRequestsComponent implements OnInit, OnDestroy {
  public data: any[] = [];
  private subscriptions: Subscription = new Subscription();

  constructor(
    public adminTableRequestsService: AdminTableRequestsService,
    public adminSpinnerService: AdminSpinnerService,
    private adminModalService: AdminModalService,
  ) {}

  public async ngOnInit(): Promise<void> {
    this.adminSpinnerService.showing = true;
    await this.adminTableRequestsService.getTableRequests();
    this.adminSpinnerService.showing = false;
    this.subscriptions.add(
      this.adminTableRequestsService.tableRequests$.subscribe((result) => {
        this.data = result;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public async approveTableRequest(id: string): Promise<void> {
    try {
      this.adminTableRequestsService.approveTableRequest(id);
    } catch (error) {
      alert("Erro ao aprovar esta requisição de mesa");
    }
  }

  public async declineTableRequest(id: string): Promise<void> {
    try {
      this.adminTableRequestsService.declineTableRequest(id);
    } catch (error) {
      alert("Erro ao recusar esta requisição de mesa");
    }
  }
}
