import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface AdminTableColumn {
  label?: string;
  column?: string;
  deleteColumn?: boolean;
}

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent {

  @Input()
  data: any;

  @Input()
  options: any;

  @Output()
  deleteClick: EventEmitter<any> = new EventEmitter();

  @Output()
  editClick: EventEmitter<any> = new EventEmitter();

}
