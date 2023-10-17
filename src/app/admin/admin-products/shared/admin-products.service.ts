import { Injectable } from "@angular/core";
import { AdminProduct } from "../../shared/types/admin-product";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminProductsService {
  private productsSubject = new BehaviorSubject<AdminProduct[]>([]);

  constructor(private httpClient: HttpClient) {}

  public async getProducts(): Promise<AdminProduct[]> {
    const url = `${environment.apiUrl}/products`;

    const products = await firstValueFrom(
      this.httpClient.get<AdminProduct[]>(url),
    );

    this.productsSubject.next(products);

    return products;
  }

  public async getProductsByCategory(
    category_id: string,
  ): Promise<AdminProduct[]> {
    const url = `${environment.apiUrl}/categories/${category_id}/products`;

    const products = await firstValueFrom(
      this.httpClient.get<AdminProduct[]>(url),
    );

    return products;
  }

  public async getProduct(
    id: string,
    category_id: string,
  ): Promise<AdminProduct> {
    const url = `${environment.apiUrl}/categories/${category_id}/products/${id}`;

    const product = await firstValueFrom(
      this.httpClient.get<AdminProduct>(url),
    );

    return product;
  }

  public async addProduct(
    name: string,
    price: number,
    category_id: string,
    file: any,
  ): Promise<void> {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", String(price));
    formData.append("image", file);

    const url = `${environment.apiUrl}/categories/${category_id}/products`;

    await firstValueFrom(this.httpClient.post(url, formData));

    await this.getProducts();
  }

  public async updateProduct(
    id: string,
    name: string,
    price: number,
    category_id: string,
    file: File,
  ): Promise<void> {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", String(price));
    formData.append("image", file);

    const url = `${environment.apiUrl}/categories/${category_id}/products/${id}`;

    await firstValueFrom(this.httpClient.put(url, formData));

    await this.getProducts();
  }

  public async deleteProduct(id: string, category_id: string): Promise<void> {
    const url = `${environment.apiUrl}/categories/${category_id}/products/${id}`;

    await firstValueFrom(this.httpClient.delete(url));

    await this.getProducts();
  }

  public get products() {
    return this.productsSubject.value;
  }

  public get products$() {
    return this.productsSubject.asObservable();
  }
}
