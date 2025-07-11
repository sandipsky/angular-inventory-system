import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { CommonModule } from '@angular/common';
import { SubNav } from '../../shared/components/sub-nav/sub-nav';
import { NavItem } from '../../shared/types/global.types';

@Component({
  selector: 'app-accounting',
  imports: [RouterOutlet, CommonModule, SubNav],
  templateUrl: './accounting.html',
  styleUrl: './accounting.scss'
})
export class Accounting {
  public commonService = inject(CommonService);

  navData: NavItem[] = [
    {
      name: 'Account',
      url: 'account-master'
    },
    {
      name: 'Payment',
      url: 'payment'
    }
  ]
}
