import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-accounting',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './accounting.html',
  styleUrl: './accounting.scss'
})
export class Accounting {
  count = true;

  onActivate(componentRef: any) {
    componentRef.clickEvent.subscribe((res: boolean) => {
     console.log(res);
      this.count = res;
    })
  }
}
