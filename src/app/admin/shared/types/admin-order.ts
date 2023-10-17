export interface AdminOrder {
  id: string;
  table_id: string;
  waiter_id?: string;
  description: string;
  category_id: string;
  product_id: string;
  product_name: string;
  product_quantity: number;
  price_unity: number;
  price_total: number;
  status: string;
  created_at: string;
}

export enum AdminOrderStatus {
  Pending = "pending",
  Doing = "doing",
  Finished = "finished",
  Canceled = "canceled",
}
