import { Component, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface SystemModalData {
  title: string;
  component: any;
  size?: string;
  data?: any;
}

@Injectable({
  providedIn: "root",
})
export class SystemModalService {
  public showingSubject = new BehaviorSubject<boolean>(false);
  public componentSubject = new BehaviorSubject<any>(null);
  public dataSubject = new BehaviorSubject<any>(null);
  public titleSubject = new BehaviorSubject<string>("");
  public sizeSubject = new BehaviorSubject<string>("");

  public open(modelData: SystemModalData): void {
    this.showingSubject.next(true);
    this.componentSubject.next(modelData.component);
    this.titleSubject.next(modelData.title);
    this.sizeSubject.next(modelData.size ?? "normal");
    this.dataSubject.next(modelData.data);
  }

  public close(): void {
    this.showingSubject.next(false);
    setTimeout(() => {
      this.componentSubject.next(null);
      this.dataSubject.next(null);
      this.titleSubject.next("");
      this.sizeSubject.next("");
    }, 300);
  }

  public get showing() {
    return this.showingSubject.value;
  }

  public get showing$() {
    return this.showingSubject.asObservable();
  }

  public get component() {
    return this.componentSubject.value;
  }

  public get component$() {
    return this.componentSubject.asObservable();
  }

  public get title() {
    return this.titleSubject.value;
  }

  public get title$() {
    return this.titleSubject.asObservable();
  }

  public get size() {
    return this.sizeSubject.value;
  }

  public get size$() {
    return this.sizeSubject.asObservable();
  }

  public get data() {
    return this.dataSubject.value;
  }

  public get data$() {
    return this.dataSubject.asObservable();
  }
}
