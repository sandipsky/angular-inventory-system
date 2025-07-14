import { Component, EventEmitter, inject } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-purchase',
  imports: [],
  templateUrl: './purchase.html',
  styleUrl: './purchase.scss'
})
export class Purchase {
  public commonService = inject(CommonService);

  constructor() {
    this.commonService.showSubNav(true);
  }

  emitEvent() {
    this.commonService.showSubNav(false);
  }
}
