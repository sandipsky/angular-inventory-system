import { Component, EventEmitter, inject } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-purchase-return',
  imports: [],
  templateUrl: './purchase-return.html',
  styleUrl: './purchase-return.scss'
})
export class PurchaseReturn {
  public commonService = inject(CommonService);

  constructor() {
    this.commonService.showSubNav(true);
  }

  emitEvent() {
    this.commonService.showSubNav(false);
  }
}
