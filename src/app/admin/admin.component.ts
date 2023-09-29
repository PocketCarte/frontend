import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AdminUserService } from './shared/services/admin-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {

  constructor(private route: ActivatedRoute, private title: Title, private adminUserService: AdminUserService) {
    this.title.setTitle('PocketCarte | Administrativo');
    this.adminUserService.loadUser();
  }
}
