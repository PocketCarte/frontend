import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable, firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SystemService {
  public currentCategorySubject: BehaviorSubject<string | undefined | null> =
    new BehaviorSubject<string | undefined | null>(undefined);

  constructor(private httpClient: HttpClient) {
    this.initialCategory();
  }

  public async initialCategory(): Promise<void> {
    const url = `${environment.apiUrl}/categories`;

    const categories: any = await firstValueFrom(this.httpClient.get(url));

    if (!this.currentCategorySubject.value) {
      this.currentCategorySubject.next(categories[0].id);
    }
  }

  public changeCurrentCategory(category_id: string): void {
    this.currentCategorySubject.next(category_id);
  }

  public async getCategories(): Promise<any> {
    const url = `${environment.apiUrl}/categories`;

    const categories: any = await firstValueFrom(this.httpClient.get(url));

    return categories;
  }

  public async getProducts(categoryId: string): Promise<any> {
    const url = `${environment.apiUrl}/categories/${categoryId}/products`;

    const products = await firstValueFrom(this.httpClient.get(url));

    return products;
  }

  public get currentCategory() {
    return this.currentCategorySubject.asObservable();
  }
}
