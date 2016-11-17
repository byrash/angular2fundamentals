import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input type="text" #userInput [(ngModel)]="message"/>
      <button (click)="update.emit({text:message})">Click Me!</button>
    </div>
  `,
  styles: [`
    :host{
        display: flex;
        flex-direction: column;
    }

    *{
      font-family: monospace;
    }

    input:focus{
      font-weight: bold;
      outline:none;
    }

    button{
      outline:none;
    }
  `]
})
export class SimpleFormComponent implements OnInit {

  @Input() message;

  @Output() update = new EventEmitter();

  
  constructor() { 
    // setInterval(()=>{this.message=Math.random().toString()},1000);
  }

  ngOnInit() {
  }

  // onClick(event,text){
  //   console.log(text);
  //   console.log(event)
  //   this.someText=text;
  // }

}
