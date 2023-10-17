import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Observer, firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";
// import { io } from "socket.io-client";s
import { AdminOrder } from "../../shared/types/admin-order";

@Injectable({
  providedIn: "root",
})
export class AdminOrdersService {
  private ordersSubject = new BehaviorSubject<AdminOrder[]>([]);
  // private socket;

  constructor(private httpClient: HttpClient) {
    // this.socket = io(environment.apiUrl);
    this.ordersRefresh().subscribe(() => {
      this.getOrders();
    });
  }

  public async getOrders(): Promise<AdminOrder[]> {
    const url = `${environment.apiUrl}/orders`;

    const tables = await firstValueFrom(this.httpClient.get<AdminOrder[]>(url));

    this.ordersSubject.next(tables);

    return tables;
  }

  public getOrder(id: string): AdminOrder {
    return this.orders.filter((order) => order.id == id)[0] ?? null;
  }

  public async addOrder(
    table_id: string,
    product_id: string,
    quantity: number,
    description: string,
  ): Promise<void> {
    const url = `${environment.apiUrl}/orders`;
    await firstValueFrom(
      this.httpClient.post(url, {
        table_id,
        product_id,
        quantity,
        description,
      }),
    );
  }

  public async updateOrder(
    order_id: string,
    product_id: string,
    quantity: number,
    description: string,
    status: string,
  ): Promise<void> {
    const url = `${environment.apiUrl}/orders/${order_id}`;
    await firstValueFrom(
      this.httpClient.put(url, { product_id, quantity, description, status }),
    );
  }

  public async cancelOrder(order_id: string): Promise<void> {
    const url = `${environment.apiUrl}/orders/${order_id}`;
    await firstValueFrom(this.httpClient.put(url, { status: "canceled" }));
  }

  public ordersRefresh(): Observable<boolean> {
    return new Observable((observer: Observer<boolean>) => {
      // this.socket.on("refresh_orders", () => {
      //   observer.next(true);
      // });
    });
  }

  public get orders() {
    return this.ordersSubject.value;
  }

  public get orders$() {
    return this.ordersSubject.asObservable();
  }
}
