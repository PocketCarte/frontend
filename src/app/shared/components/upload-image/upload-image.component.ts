import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject, Subscription } from "rxjs";

type UploadImageAlignTypes = "center" | "left" | "right";

@Component({
  selector: "app-upload-image",
  templateUrl: "./upload-image.component.html",
  styleUrls: ["./upload-image.component.scss"],
})
export class UploadImageComponent implements OnInit, OnDestroy {
  @Input() size = "md";
  @Input() placeholder = "";
  @Input() align: UploadImageAlignTypes = "left";
  @Input() label = "";
  @Input() control!: FormControl;
  @Input() initialValue!: BehaviorSubject<string>;
  @Output() changed: EventEmitter<any> = new EventEmitter();

  public imagePreview!: string | null | undefined | ArrayBuffer;

  private subscriptions: Subscription = new Subscription();

  public ngOnInit(): void {
    if (this.initialValue) {
      this.subscriptions.add(
        this.initialValue.asObservable().subscribe((value) => {
          this.imagePreview = value;
        }),
      );
    }
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public onChange(event: any): void {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (fileReaderEvent) => {
        const fileContent = fileReaderEvent.target?.result?.toString();

        if (fileContent) {
          this.imagePreview = fileContent;
        }
      };

      reader.readAsDataURL(file);
      this.control.setValue(file);
      this.changed.emit(event);
    }
  }
}
