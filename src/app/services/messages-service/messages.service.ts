import { Injectable } from '@angular/core';
import { read } from 'fs';
import { Message } from '../../entities/Message/Message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  listKey : string = 'messagesList';
  messagesList : Array<Message> = [];

  constructor() { 
    this.messagesList = this.readFromLocalStorage();
  }

  getMessagesList() : Array<Message> {
    return this.messagesList;
  }
  
  createNewMessage(specification : MessageSpecification) : Message {
    const newMessage = new Message(this.generateId(), specification); 
    this.messagesList.push(newMessage);
    this.updateList();
    return newMessage;
  }

  editMessage(id: number, specification : MessageSpecification) : Message | null {
    let messageToEdit = this.findMessageById(id);
    if (messageToEdit) {
      messageToEdit = Message.editMessage(messageToEdit, specification);
    }
    return messageToEdit;
  }
  deleteMessage(id: number) {
    const messageToDelete = this.findMessageById(id);
    if (messageToDelete) {
      this.messagesList.splice(this.messagesList.findIndex(message => message.id === messageToDelete.id), 1);
    }
    this.updateList();
  }

  findMessageById(id: number) {
    return this.messagesList.find(message => message.id === id) || null;
  }
  updateList() {
    this.writeToLocalStorage(this.messagesList);
  }
  readFromLocalStorage() : Array<Message> {
    return JSON.parse(localStorage.getItem(this.listKey) || '[]');
  }
  writeToLocalStorage(messages: Array<Message>) {
    return localStorage.setItem(this.listKey, JSON.stringify(messages));
  }
  generateId() : number {
    const messagesList = this.readFromLocalStorage();
    return messagesList.length > 0 ? messagesList[messagesList.length - 1].id + 1 : 0;
  }
}
