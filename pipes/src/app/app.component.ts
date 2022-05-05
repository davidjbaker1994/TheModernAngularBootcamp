import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //name = ''; also would work
  name!: string;
  date!: string;
  amount!: number; //exclamation point after means property could be null type checking wise
  height!: number;
  miles!: number;
  
  //to 'initialize' a property technically means to 'declare' it and assign it a value at once
  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000
  }

  onNameChange(eventTarget: EventTarget) {//accompanying format was value: string for parameter here
    const value: string = (eventTarget as HTMLInputElement).value;
    this.name = value;
  }

  onDateChange(eventTarget: EventTarget) {//same here
    const value: string = (eventTarget as HTMLInputElement).value;
    this.date = value;
  }

  onAmountChange(eventTarget: EventTarget) {//see if this works like in video (didn't) value: string
    const value: string = (eventTarget as HTMLInputElement).value;
    this.amount = parseFloat(value);
  }

  onHeightChange(eventTarget: EventTarget) {
    const value: string = (eventTarget as HTMLInputElement).value;
    this.height = parseFloat(value); 
  }

  onMilesChange(eventTarget: EventTarget) {
    const value: string = (eventTarget as HTMLInputElement).value;
    this.miles = parseFloat(value);
  }

}
