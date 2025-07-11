import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavItem } from '../../shared/types/global.types';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  navData: Array<NavItem> = [
    {
      name: "Dashboard",
      icon: "dashboard",
      url: "dashboard"
    },
    {
      name: "Inventory",
      icon: "inventory",
      url: "inventory"
    },
    {
      name: "billing",
      icon: "request_page",
      url: "billing"
    },
    {
      name: "accounting",
      icon: "difference",
      url: "accounting"
    },
    {
      name: "users",
      icon: "group",
      url: "users"
    },
    {
      name: "masters",
      icon: "dashboard_customize",
      url: "masters"
    },
    {
      name: "reports",
      icon: "assessment",
      url: "reports"
    },
    {
      name: "Settings",
      icon: "settings",
      url: "settings"
    }
  ]
}
