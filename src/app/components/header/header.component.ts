import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  currentChoice: string = 'home';

  constructor(private router: Router) {}

  changePage(page: string) {
    this.currentChoice = page;
    this.router.navigate([page]);
  }

  getActive(page: string) : string{
    if(this.currentChoice == page)
         return "active";
    else
         return "not";
  }
}
