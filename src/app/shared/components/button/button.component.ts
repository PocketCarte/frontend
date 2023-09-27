import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ButtonSizeType = 'normal' | 'large' | 'small'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() type = '';
  @Input() size: ButtonSizeType = 'normal';
  @Output() clicked: EventEmitter<any> = new EventEmitter();

  public onClick(): void {
    this.clicked.emit();
  }
}
