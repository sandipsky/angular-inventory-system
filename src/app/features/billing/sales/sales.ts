import { Component, EventEmitter, inject } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-sales',
  imports: [],
  templateUrl: './sales.html',
  styleUrl: './sales.scss'
})
export class Sales {
  public commonService = inject(CommonService);

  constructor() {
    this.commonService.showSubNav(true);
  }

  emitEvent() {
    this.commonService.showSubNav(false);
  }
}
