import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "tableStatus",
})
export class TableStatusPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    switch (parseInt(value)) {
      case 0:
        return "Disponível";
      case 1:
        return "Em uso";
      default:
        return "Nenhum";
    }
  }
}
