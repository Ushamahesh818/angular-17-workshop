import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-demo-2',
  standalone: true,
  imports: [],
  templateUrl: './message-demo-2.component.html',
  styleUrl: './message-demo-2.component.css'
})
export class MessageDemo2Component {
  constructor(private msgService:MessageService){
  }

  sendMyMessage(msg:any){
    this.msgService.sendMessage(msg)
  }
  clearMsgs(){
    this.msgService.clearMessage();
  }
}
