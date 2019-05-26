import { Directive, Input, ElementRef, OnInit } from "@angular/core";
import { ColorHandler, NAMED_COLORS } from './color-handler'


@Directive({
    selector: '[bgColor]'
})
export class BgcColorDirective implements OnInit {



    constructor(private el: ElementRef) {

    }
    @Input('bgColor') color: string;

    ngOnInit() {
        if (this.color.includes('[') && this.color.includes(']')) {
            let colorName = this.color.slice(0, this.color.indexOf('['));
            let colorTone = this.color.slice(this.color.indexOf('[') + 1, this.color.length - 1);
            if (colorName !== "") {
                if (NAMED_COLORS.map(c => c.name.toLowerCase()).includes(colorName.toLowerCase())) {
                    let colorHex = NAMED_COLORS.find(c => c.name.toLowerCase() === colorName.toLowerCase()).hex;

                    this.el.nativeElement.style.backgroundColor = ColorHandler.getColorTone(colorHex, +colorTone);
                }
            }
        }
    }

    


}