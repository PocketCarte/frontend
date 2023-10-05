import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

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
export class AdminTableComponent implements OnInit{

  @Input()
  data!: Observable<any>;

  @Input()
  options: any;

  @Output()
  deleteClick: EventEmitter<any> = new EventEmitter();

  @Output()
  editClick: EventEmitter<any> = new EventEmitter();

  public page: number = 1;
  public pageCount: number = 0;
  public limit: number = 6;
  public dataTotal: any[] = [];
  public dataTable: any;
  
  public ngOnInit(): void {
    this.data.subscribe((test) => {
      this.page = 1;
      this.pageCount = Math.ceil(test.length / this.limit);
      this.dataTotal = test;
      this.refreshDataTable();
    })
  }

  private refreshDataTable(): void {
    this.dataTable = this.dataTotal.slice(this.page * this.limit - this.limit, this.page * this.limit);
  }

  public nextPage(): void {
    if (this.hasNextPage()) {
      this.page++;
    }
    this.refreshDataTable();
  }

  public previewPage(): void {
    if (this.hasPreviewPage()) {
      this.page--;
    }
    this.refreshDataTable();
  }

  public hasNextPage(): boolean {
    return this.page < this.pageCount;
  }

  public hasPreviewPage(): boolean {
    return this.page > 1;
  }

}
