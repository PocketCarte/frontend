import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface SelectItem {
  value: string;
  label?: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() items: SelectItem[] = [];
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() control!: FormControl;
  @Output() changed: EventEmitter<any> = new EventEmitter(); 

  public onChange(event: any): void {
    this.changed.emit(event)
  }

}
