import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { AdminLoginService } from '../../services/admin-login.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent {
  userDropdown = false;
  @ViewChild('header') header!: ElementRef;

  constructor(
    public adminLoginService: AdminLoginService,
    private renderer: Renderer2
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (!this.header.nativeElement.contains(e.target)) {
        this.userDropdown = false;
      }
    });
  }

  public toggleUserDropdown(): void {
    this.userDropdown = !this.userDropdown;
  }
}
