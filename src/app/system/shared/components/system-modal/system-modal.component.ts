import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { SystemModalService } from "../../services/system-modal.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-system-modal",
  templateUrl: "./system-modal.component.html",
  styleUrls: ["./system-modal.component.scss"],
})
export class SystemModalComponent implements AfterViewInit, OnDestroy {
  public title = "";
  public size = "";
  public showing = false;
  public component!: any;

  private subscriptions: Subscription = new Subscription();

  constructor(public systemModalService: SystemModalService) {}

  public ngAfterViewInit(): void {
    this.subscriptions.add(
      this.systemModalService.title$.subscribe((result) => {
        this.title = result;
      }),
    );
    this.subscriptions.add(
      this.systemModalService.showing$.subscribe((result) => {
        this.showing = result;
      }),
    );
    this.subscriptions.add(
      this.systemModalService.component$.subscribe((result) => {
        this.component = result;
      }),
    );
    this.subscriptions.add(
      this.systemModalService.size$.subscribe((result) => {
        this.size = result;
      }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
