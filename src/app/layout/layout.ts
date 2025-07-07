import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Header } from "./header/header";

@Component({
  selector: 'app-layout',
  imports: [MatSidenavModule, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout {

}
