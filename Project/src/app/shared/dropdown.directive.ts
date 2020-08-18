import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({ 
    selector: '[appDropdown]' 
})
export class DropdownDirective {

    //Atachar till själva klassen och när den ändras till true så läggs den till.
    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click',['$event']) toggleOpen(event: Event){
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elementRef: ElementRef){

    }
}