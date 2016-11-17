import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages=[
    {'id':0,'text':'Message 0'},
    {'id':1,'text':'Message 1'},
    {'id':2,'text':'Message 2'}
  ];

  constructor() { }

  update(id,text){
    this.messages = this.messages.map(m => m.id === id ? {id:id,text:text}:m);
  }

}
