import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() type!: string;
  @Input() placeholder!: string;
  @Output() changed: EventEmitter<any> = new EventEmitter(); 

  public onChange(event: any): void {
    this.changed.emit(event)
  }

}
