import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
    @Output() blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();
    // newServerName = '';
    // newServerContent = '';

    //Get elements in template
    @ViewChild('serverContentInput', {static: true}) serverContentInput:ElementRef;

    constructor() { }

    ngOnInit(): void {
    }
    
    onAddServer(serverName: HTMLInputElement){
        this.serverCreated.emit({
            serverName: serverName.value, 
            serverContent: this.serverContentInput.nativeElement.value
        })
    }

    onAddBlueprint(blueprintName: HTMLInputElement){
        this.blueprintCreated.emit({
            blueprintName: blueprintName.value, 
            blueprintContent: this.serverContentInput.nativeElement.value
        })
    }
}
