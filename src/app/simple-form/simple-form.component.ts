import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  // Controlls the import of styles from parent styles
  encapsulation: ViewEncapsulation.Native, 
  selector: 'app-simple-form',
  template: `
    <div>
      <input 
      type="text" 
      #userInput 
      [(ngModel)]="message"
      [ngClass]="{mouseDown:isMouseDown}"
      (mousedown)="isMouseDown=true"
      (mouseup)="isMouseDown=false"
      />
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

    .mouseDown{
      border: 2px solid green;
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
