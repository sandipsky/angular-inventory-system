import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-master',
  imports: [],
  templateUrl: './account-master.html',
  styleUrl: './account-master.scss'
})
export class AccountMaster {
  clickEvent = new EventEmitter<boolean>();

  constructor() {
    this.clickEvent.emit(true)
  }

  ngOnInit() {
    // setTimeout(() => this.clickEvent.emit(true));
  }

  emitEvent() {
    this.clickEvent.emit(false);
  }
}
