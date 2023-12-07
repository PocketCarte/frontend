import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { io } from "socket.io-client";

@Injectable({
  providedIn: "root",
})
export class AdminWaiterService {
  public listenWaiterMessages(): void {
    const socket = io(environment.apiUrl);

    socket.on("waiter_message", (message) => {
      alert(`${message.title}\n\n${message.subtitle}`);
    });
  }
}
