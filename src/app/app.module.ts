import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { SystemModule } from "./system/system.module";
import ptBr from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    SystemModule,
    AdminModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    [
      { provide: LOCALE_ID, useValue: "pt" },
      { provide: DEFAULT_CURRENCY_CODE, useValue: "BRL" },
    ],
  ],
})
export class AppModule {}
