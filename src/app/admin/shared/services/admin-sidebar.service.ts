import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminSidebarService {
  public statusSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  public get status$() {
    return this.statusSubject.asObservable();
  }

  public get status() {
    return this.statusSubject.value;
  }

  public set status(value: boolean) {
    this.statusSubject.next(value);
  }
}
