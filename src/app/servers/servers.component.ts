import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverId = 10;
  serverStatus: string = 'offline';
  serverCreationStatus = 'No server was created!';
  serverName='Testserver';

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }

  onUpdateServerName(){
    this.serverName = event.target.value;
  }

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }

}
