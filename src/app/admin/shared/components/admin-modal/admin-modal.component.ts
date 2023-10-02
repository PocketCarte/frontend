import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { AdminModalService } from '../../services/admin-modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-modal',
  templateUrl: './admin-modal.component.html',
  styleUrls: ['./admin-modal.component.scss']
})
export class AdminModalComponent implements AfterViewInit,OnDestroy {

  public title: string = '';
  public size: string = '';
  public showing = false;
  public component!: any;

  private subscriptions: Subscription = new Subscription();

  constructor (public adminModalService: AdminModalService) { }

  public ngAfterViewInit(): void {
    this.subscriptions.add(
      this.adminModalService.title$.subscribe((result) => {
        this.title = result;
      })
    )
    this.subscriptions.add(
      this.adminModalService.showing$.subscribe((result) => {
        this.showing = result;
      })
    )
    this.subscriptions.add(
      this.adminModalService.component$.subscribe((result) => {
        this.component = result;
      })
    )
    this.subscriptions.add(
      this.adminModalService.size$.subscribe((result) => {
        this.size = result;
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
