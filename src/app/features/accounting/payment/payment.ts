import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.html',
  styleUrl: './payment.scss'
})
export class Payment {
  clickEvent = new EventEmitter<boolean>();

  // ngOnInit() {
  //   setTimeout(() => this.clickEvent.emit(true));
  // }

  constructor() {
    this.clickEvent.emit(true)
  }
}
