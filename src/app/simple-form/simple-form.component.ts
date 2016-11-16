import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input type="text" #userInput />
      <button (click)="onClick($event,userInput.value)">Click Me!</button>
      <p>Hello {{someText}}</p>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  someText='Hello!';
  constructor() { }

  ngOnInit() {
  }

  onClick(event,text){
    console.log(text);
    console.log(event)
    this.someText=text;
  }

}
