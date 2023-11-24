import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-textarea",
  templateUrl: "./textarea.component.html",
  styleUrls: ["./textarea.component.scss"],
})
export class TextAreaComponent {
  @Input() placeholder = "";
  @Input() label = "";
  @Input() control!: FormControl;
  @Output() changed: EventEmitter<any> = new EventEmitter();

  public onChange(event: any): void {
    this.changed.emit(event);
  }
}
