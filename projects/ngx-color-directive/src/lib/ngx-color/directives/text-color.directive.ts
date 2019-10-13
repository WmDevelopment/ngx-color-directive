import { Directive, ElementRef, Input, OnInit } from "@angular/core";

import { ColorHandler, NAMED_COLORS } from "../color-handler";

@Directive({
  selector: "[textColor]"
})
export class TextColorDirective implements OnInit {
  constructor(private el: ElementRef) {}
  @Input("textColor") color: string;

  ngOnInit() {
    if (this.color.includes("[") && this.color.includes("]")) {
      const colorName = this.color.slice(0, this.color.indexOf("["));
      const colorTone = this.color.slice(
        this.color.indexOf("[") + 1,
        this.color.length - 1
      );
      if (colorName !== "") {
        if (
          NAMED_COLORS.map(c => c.name.toLowerCase()).includes(
            colorName.toLowerCase()
          )
        ) {
          const colorHex = NAMED_COLORS.find(
            c => c.name.toLowerCase() === colorName.toLowerCase()
          ).hex;

          this.el.nativeElement.style.color = ColorHandler.getColorTone(
            colorHex,
            +colorTone
          );
        }
      }
    }
  }
}
