import { Injectable } from "@angular/core";
import { AdminProduct } from "../../shared/types/admin-product";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Observer, firstValueFrom } from "rxjs";
import { io } from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class AdminTableRequestsService {
  private tableRequestsSubject = new BehaviorSubject<AdminProduct[]>([]);
  private socket;

  constructor(private httpClient: HttpClient) {
    this.socket = io(environment.apiUrl);
    this.tableRequestsRefresh().subscribe(() => {
      this.getTableRequests();
    });
  }

  public async getTableRequests(): Promise<any[]> {
    const url = `${environment.apiUrl}/table_requests`;

    const tables = await firstValueFrom(this.httpClient.get<any[]>(url));

    this.tableRequestsSubject.next(tables);

    return tables;
  }

  public async approveTableRequest(table_request_id: string): Promise<void> {
    const url = `${environment.apiUrl}/table_requests/${table_request_id}/approve`;

    await firstValueFrom(this.httpClient.put(url, {}));
  }

  public async declineTableRequest(table_request_id: string): Promise<void> {
    const url = `${environment.apiUrl}/table_requests/${table_request_id}/decline`;

    await firstValueFrom(this.httpClient.put(url, {}));
  }

  public tableRequestsRefresh(): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      this.socket.on("refresh_table_requests", () => {
        observer.next(true);
      });
    });
  }

  public get tableRequests() {
    return this.tableRequestsSubject.value;
  }

  public get tableRequests$() {
    return this.tableRequestsSubject.asObservable();
  }
}
