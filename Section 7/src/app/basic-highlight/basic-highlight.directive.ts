import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ 
    selector: '[appHighlight]' 
}
)
export class HighlightDirective implements OnInit{
    @Input() defaultColor: string = 'transparent';
    @Input('appHighlight') highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;
    constructor(private elementRef: ElementRef, private renderer: Renderer2){
       
    }

    ngOnInit(){
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
        this.backgroundColor = this.defaultColor
    }


    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue')
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        ///this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
        this.backgroundColor = this.defaultColor;
    }

}
