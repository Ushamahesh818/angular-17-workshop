import { Component } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-demo-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-demo-1.component.html',
  styleUrl: './message-demo-1.component.css'
})
export class MessageDemo1Component {
  msgFromService:any=[];
  constructor(private msgService:MessageService){

  }
  ngOnInit(){
      this.msgService.getMessage().subscribe(msg=>{
            if(msg){
              this.msgFromService.push(msg)
            }else{
              this.msgFromService=[];
            }
      })
  }
}
