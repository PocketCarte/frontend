import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SystemMenuOrderService {
  constructor(private httpClient: HttpClient) {}

  public async addOrder(
    table_id: string,
    product_id: string,
    quantity: number,
    description: string,
  ): Promise<any> {
    const url = `${environment.apiUrl}/new_order`;

    const product = await firstValueFrom(
      this.httpClient.post(url, {
        table_id,
        product_id,
        quantity,
        description,
      }),
    );

    return product;
  }
}
