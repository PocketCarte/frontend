import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "orderStatus",
})
export class OrderStatusPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    switch (value) {
      case "canceled":
        return "Cancelado";
      case "finished":
        return "Finalizado";
      case "doing":
        return "Fazendo";
      case "pending":
        return "Pendente";
      default:
        return "Sem status";
    }
  }
}
