import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data :string = "I am the King of Pirates!";
  Active :boolean = true;
  clickResponses = [];
  classFlag :number = 5;
  makeNewResponse(clientX,clientY){
    let date = new Date();
    return {
    'timeStamp': date,
    'clientX': clientX,
    'clientY': clientY,
    'eventType': 'Click'
   }
  }

  updateLog(clientX,clientY) :void{
    this.Active = !this.Active;
    let clickEvent = this.makeNewResponse(clientX,clientY);
    this.clickResponses.push(clickEvent);
  }
}
