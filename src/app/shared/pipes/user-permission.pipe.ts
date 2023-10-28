import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "userPermission",
})
export class UserPermissionPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    switch (parseInt(value)) {
      case 1:
        return "Administrador";
      case 2:
        return "Gerente";
      case 3:
        return "Garçom";
      case 4:
        return "Cozinha";
      default:
        return "Nenhuma";
    }
  }
}
