import { Component, EventEmitter, inject } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-account-master',
  imports: [],
  templateUrl: './account-master.html',
  styleUrl: './account-master.scss'
})
export class AccountMaster {
  public commonService = inject(CommonService);

  constructor() {
    this.commonService.showSubNav(true);
  }

  emitEvent() {
    this.commonService.showSubNav(false);
  }
}
