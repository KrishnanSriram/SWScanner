import { Component } from '@angular/core';

@Component({
  selector: 'sws-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  hideChat: boolean

  constructor() {
    this.hideChat = true;
  }

  showChatWindow() {
    console.log('AppComponent: show chat window button tapped');
    this.hideChat = !this.hideChat;

  }
}
