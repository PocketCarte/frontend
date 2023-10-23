import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdminTable } from "../../shared/types/admin-table";
import { environment } from "src/environments/environment";
import { BehaviorSubject, firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AdminTablesService {
  private tablesSubject = new BehaviorSubject<AdminTable[]>([]);

  constructor(private httpClient: HttpClient) {}

  public async getTables(): Promise<AdminTable[]> {
    const url = `${environment.apiUrl}/tables`;

    const tables = await firstValueFrom(this.httpClient.get<AdminTable[]>(url));

    this.tablesSubject.next(tables);

    return tables;
  }

  public async getTable(id: string): Promise<AdminTable> {
    const url = `${environment.apiUrl}/tables/${id}`;

    const table = await firstValueFrom(this.httpClient.get<AdminTable>(url));

    return table;
  }

  public async addTable(name: string): Promise<void> {
    const url = `${environment.apiUrl}/tables/`;

    await firstValueFrom(this.httpClient.post(url, { name }));

    await this.getTables();
  }

  public async updateTable(
    id: string,
    name: string,
    status: number,
  ): Promise<void> {
    const url = `${environment.apiUrl}/tables/${id}`;

    await firstValueFrom(this.httpClient.put(url, { name, status }));

    await this.getTables();
  }

  public async deleteTable(id: string): Promise<void> {
    const url = `${environment.apiUrl}/tables/${id}`;

    await firstValueFrom(this.httpClient.delete(url));

    await this.getTables();
  }

  public async finishTable(id: string): Promise<void> {
    const url = `${environment.apiUrl}/tables/${id}/finish`;

    await firstValueFrom(this.httpClient.post(url, {}));

    await this.getTables();
  }

  public async cancelTable(id: string): Promise<void> {
    const url = `${environment.apiUrl}/tables/${id}/finish`;

    await firstValueFrom(this.httpClient.post(url, { cancel: true }));

    await this.getTables();
  }

  public get tables() {
    return this.tablesSubject.value;
  }

  public get tables$() {
    return this.tablesSubject.asObservable();
  }
}
