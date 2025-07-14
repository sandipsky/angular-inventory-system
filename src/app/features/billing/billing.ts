import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from '../../shared/services/common.service';
import { CommonModule } from '@angular/common';
import { SubNav } from '../../shared/components/sub-nav/sub-nav';
import { NavItem } from '../../shared/types/global.types';

@Component({
  selector: 'app-billing',
  imports: [RouterOutlet, CommonModule, SubNav],
  templateUrl: './billing.html',
  styleUrl: './billing.scss'
})
export class Billing {
  public commonService = inject(CommonService);

  navData: NavItem[] = [
    {
      name: 'Sales',
      url: 'sales',
      icon: ''
    },
    {
      name: 'Sales Return',
      url: 'sales-return',
      icon: ''
    }
  ]
}
