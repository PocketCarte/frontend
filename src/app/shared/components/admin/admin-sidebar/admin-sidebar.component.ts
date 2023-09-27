import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface SidebarItem {
  route: string;
  icon: string;
}

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.scss']
})
export class AdminSidebarComponent {

  public sidebarItems: SidebarItem[] = [
    {
      route: '/admin/dashboard',
      icon: 'bi-bar-chart-fill'
    },
    {
      route: '/admin/orders',
      icon: 'bi-cart-fill'
    },
    {
      route: '/admin/categories',
      icon: 'bi-bookmarks-fill'
    },
    {
      route: '/admin/products',
      icon: 'bi-archive-fill'
    },
    {
      route: '/admin/tables',
      icon: 'bi-qr-code'
    },
    {
      route: '/admin/users',
      icon: 'bi-person-fill-gear'
    },
  ]

  constructor (private route: ActivatedRoute) { }

  public isSelected(route: string) {
    return this.route.snapshot.data['checkRoute'].includes(route);
  }

}
