import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-message-page',
  templateUrl: './new-message-page.component.html',
  styleUrls: ['./new-message-page.component.scss']
})
export class NewMessagePageComponent implements OnInit {
  newMessage : MessageSpecification;
  checkoutForm;

  constructor(private router: Router,
              private messageService: MessagesService,
              private formBuilder: FormBuilder) {
    this.newMessage = { 
      senderEmail: 'r0bari@yandex.ru', 
      recipientEmail: '', 
      theme: '', 
      body: '', 
      files: new Array<string>(),
      filesSize: new Array<number>(),
      sendDate: new Date().toLocaleString('ru', { day: 'numeric', month: 'long', year: 'numeric' })
    };
    this.checkoutForm = new FormGroup({
      recipient: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      theme: new FormControl(null, [Validators.required]),
      body: new FormControl(null, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  clearFileInput() : void {

  }
  chooseFile(event : any) {

  }
  onSubmit(messageData : any) {
    this.newMessage.recipientEmail = messageData.recipient;
    this.newMessage.theme = messageData.theme;
    this.newMessage.body = messageData.body;
    this.newMessage.senderEmail = "r0bari@yandex.ru";
    this.messageService.createNewMessage(this.newMessage);
    this.router.navigate(['/messages']);
  }
}
