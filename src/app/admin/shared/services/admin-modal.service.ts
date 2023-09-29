import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AdminModalData {
  title: string;
  component: ElementRef;
}

@Injectable({
  providedIn: 'root',
})
export class AdminModalService {
  public showingSubject = new BehaviorSubject<boolean>(false);
  public componentSubject = new BehaviorSubject<ElementRef | undefined | null>(
    undefined
  );
  public titleSubject = new BehaviorSubject<string>('');

  public set showing(value: boolean) {
    this.showingSubject.next(value);
  }

  // *ngComponentOutlet="componentTypeExpression"

  public open(data: AdminModalData): void {
    
  }

  public close(): void {
    this.showingSubject.next(false);
    this.componentSubject.next(null);
    this.titleSubject.next('');
  }

  public get showing() {
    return this.showingSubject.value;
  }

  public get showing$() {
    return this.showingSubject.asObservable();
  }

  // public get component() {
  //   return this..value;
  // }

  // public get component$() {
  //   return this.showingSubject.asObservable();
  // }
}
