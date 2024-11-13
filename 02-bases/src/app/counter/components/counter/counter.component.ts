import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ value }}</h3>
  <button (click)="decreaseBy(1)">-1</button>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>`
})
export class CounterComponent {
  public value: number = 10;

  increaseBy(value: number): void {
    this.value += value;
  }

  decreaseBy(value: number): void {
    this.value -= value;
  }

  resetCounter(): void {
    this.value = 10;
  }
}
