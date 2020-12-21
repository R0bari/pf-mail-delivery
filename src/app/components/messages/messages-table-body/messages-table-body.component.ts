import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/entities/Message/Message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages-table-body',
  templateUrl: './messages-table-body.component.html',
  styleUrls: ['./messages-table-body.component.scss']
})
export class MessagesTableBodyComponent implements OnInit {
  messages : Array<Message> = [];
  randomDate : string = '';
  randomSize : string = '';
  constructor(private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.randomDate = new Date().toLocaleDateString('ru');
    this.randomSize = Math.floor(Math.random() * 90 + 10) + ' КБ';
    this.messages = this.messagesService.getMessagesList();
  }

  onDeleteMessage(messageId: number) {
    this.messagesService.deleteMessage(messageId);
  }
}
