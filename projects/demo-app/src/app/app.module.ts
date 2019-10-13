import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import {
  NgxColorModule,
} from "./../../../ngx-color-directive/src/lib/ngx-color/ngc-color.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxColorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
