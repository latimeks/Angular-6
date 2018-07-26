import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer: boolean = false;
serverCreationStatus :string = "No Server was created";
serverName :string = '';
serverCreated :boolean = false;
servers :string[] = ["TestServer", "TestServer2"];
  constructor() {
        setTimeout(()=>{
             this.allowNewServer = true
       },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! and name was ${this.serverName.toUpperCase()}`;
  }
  onUpdateServerName(event :any){
    this.serverName = event.target.value;
  }

}
