import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];


    onServerAdded(serverData: { serverName: string, serverContent: string }) {
        this.servers.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
        });
    }

    onBlueprintAdded(blueprintData: { blueprintName: string, blueprintContent: string }) {
        this.servers.push({
        type: 'blueprint',
        name: blueprintData.blueprintName,
        content: blueprintData.blueprintContent
        });
    }
}
