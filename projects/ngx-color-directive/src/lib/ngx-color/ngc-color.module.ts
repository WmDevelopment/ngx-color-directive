import { NgModule } from "@angular/core";

import { BgcColorDirective } from "./directives/bgc-color.directive";
import { TextColorDirective } from "./directives/text-color.directive";

@NgModule({
  declarations: [BgcColorDirective, TextColorDirective],
  exports: [BgcColorDirective, TextColorDirective]
})
export class NgxColorModule {}
