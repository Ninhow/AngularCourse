import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

    @Input() server: {type: string,	name: string, content: string };
    @ContentChild ('contentParagraph', {static:true}) contentParagraph: ElementRef;
  
	constructor() {

    }

	ngOnInit(): void {
        console.log(this.server)
    }
    
    ngAfterContentInit(): void {
        console.log('Text Content of paragraph: ' + this.contentParagraph.nativeElement.textContent);
    }

}
