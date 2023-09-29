import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminSpinnerService } from '../../services/admin-spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-spinner',
  templateUrl: './admin-spinner.component.html',
  styleUrls: ['./admin-spinner.component.scss']
})
export class AdminSpinnerComponent implements OnInit, OnDestroy{

  public showing = false;
  private subscriptions: Subscription = new Subscription();

  constructor(private adminSpinnerService: AdminSpinnerService) {}

  public ngOnInit(): void {
    this.subscriptions.add(
      this.adminSpinnerService.showing$.subscribe((result) => {
        this.showing = result;
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();  
  }

}
