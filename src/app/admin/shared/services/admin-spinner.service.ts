import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminSpinnerService {
  public showingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  public set showing(value: boolean) {
    this.showingSubject.next(value);
  }

  public get showing() {
    return this.showingSubject.value;
  }

  public get showing$() {
    return this.showingSubject.asObservable();
  }
}
