import { Injectable } from "@angular/core";
import { io } from "socket.io-client";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class SystemWaiterService {
  private socket;

  constructor() {
    this.socket = io(environment.apiUrl);
  }

  public sendMessage(title: string, subtitle: string): void {
    this.socket.emit("waiter_message", { title, subtitle });
  }
}
