import { Component, EventEmitter, inject } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-sales-return',
  imports: [],
  templateUrl: './sales-return.html',
  styleUrl: './sales-return.scss'
})
export class SalesReturn {
  public commonService = inject(CommonService);

  constructor() {
    this.commonService.showSubNav(true);
  }

  emitEvent() {
    this.commonService.showSubNav(false);
  }
}
