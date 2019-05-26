import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TextColorDirective } from './text-color.directive';
import { BgcColorDirective } from './bgc-color.directive';

@NgModule({
  declarations: [
    TextColorDirective,
    BgcColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class NgxColorModule { }
