import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AdminCategory } from '../../shared/types/admin-category';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoriesService {

  private categoriesSubject = new BehaviorSubject<AdminCategory[]>([]);

  constructor(private httpClient: HttpClient) { }

  public async getCategories(): Promise<AdminCategory[]> {
    const url = `${environment.apiUrl}/categories`;

    const tables = await firstValueFrom(this.httpClient.get<AdminCategory[]>(url));
    
    this.categoriesSubject.next(tables);

    return tables;
  }

  public async getCategory(id: string): Promise<AdminCategory> {
    const url = `${environment.apiUrl}/categories/${id}`;

    const table = await firstValueFrom(this.httpClient.get<AdminCategory>(url));

    return table;
  }

  public async addCategory(name: string): Promise<void> {
    const url = `${environment.apiUrl}/categories/`;

    await firstValueFrom(this.httpClient.post(url, { name }));

    await this.getCategories();
  }

  public async updateCategory(id: string, name: string): Promise<void> {
    const url = `${environment.apiUrl}/categories/${id}`;

    await firstValueFrom(this.httpClient.put(url, { name }));

    await this.getCategories();
  }

  public async deleteCategory(id: string): Promise<void> {
    const url = `${environment.apiUrl}/categories/${id}`;

    await firstValueFrom(this.httpClient.delete(url));

    await this.getCategories();
  }

  public get categories() {
    return this.categoriesSubject.value;
  }

  public get categories$() {
    return this.categoriesSubject.asObservable();
  }
}
