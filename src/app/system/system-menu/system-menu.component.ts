import { Component, OnDestroy, OnInit } from '@angular/core';
import { SystemService } from '../shared/system.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.scss']
})
export class SystemMenuComponent implements OnInit, OnDestroy{

  public categories: any[] = [];
  public products: any[] = [];
  public currentCategory: string = '';

  private subscriptions: Subscription = new Subscription();

  constructor (public systemService: SystemService) { }

  public ngOnInit(): void {
    this.systemService.getCategories().then(result => {
      this.categories = result;
    })

    this.subscriptions.add(
      this.systemService.currentCategory.subscribe((result) => {
        if(result){
          this.currentCategory = result;
          this.systemService.getProducts(result).then(result => {
            this.products = result;
          })
        }
      })
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
